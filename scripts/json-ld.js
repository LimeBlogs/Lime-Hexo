/**
 * Hexo JSON-LD Generator (v3.0 Bug Fix Edition)
 * 修复：图片路径换行导致 JSON 解析失败的问题
 * 修复：图片路径非绝对路径的问题
 */

hexo.extend.filter.register('after_render:html', function(htmlContent, data) {
    if (!data || !data.page || !data.config) return htmlContent;

    const config = data.config;
    const theme = data.theme;
    const page = data.page;

    // === 工具函数区 ===
    
    // 1. 强力清洗字符串 (去除换行、多余空格)
    const cleanStr = (str) => {
        if (!str) return "";
        return String(str).replace(/[\r\n]+/g, '').trim(); 
    };

    // 2. 摘要生成 (去除 HTML)
    const stripHTML = (str) => {
        if (!str) return "";
        return str.replace(/<[^>]+>/g, "")
                  .replace(/[\r\n]+/g, " ")
                  .substring(0, 150);
    };

    // 3. url 补全 (强制转为绝对路径 https://...)
    const toAbsolute = (url) => {
        if (!url) return "";
        url = cleanStr(url); // 先清洗换行
        if (url.startsWith('http')) return url;
        // 处理 // 开头的协议相对路径
        if (url.startsWith('//')) return 'https:' + url;
        // 处理相对路径
        return config.url + (url.startsWith('/') ? url : '/' + url);
    };

    // === 变量准备 ===
    
    const currentTitle = cleanStr(page.title || config.title);
    const siteTitle = cleanStr(config.title);
    const authorName = cleanStr(theme.author || config.author || "Lime");
    const description = cleanStr(page.description || stripHTML(page.excerpt) || stripHTML(page.content) || config.description);
    const currentUrl = toAbsolute(page.path);
    
    // 全局头像 (兜底用)
    const globalAvatar = toAbsolute(theme.avatar || "/LimePan/logo.jpeg");
    
    // 页面封面 (优先取 cover -> top_img -> 全局头像)
    // 重点：这里套用了 toAbsolute，既修好了换行，又修好了相对路径
    let rawCover = page.cover || page.top_img;
    let currentCover = rawCover ? toAbsolute(rawCover) : globalAvatar;

    // === JSON 构建 ===
    
    let jsonLD = null;

    // A. 首页
    if (page.__index === true || data.path === 'index.html') {
        jsonLD = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": siteTitle,
            "url": config.url,
            "author": { "@type": "Person", "name": authorName, "url": config.url },
            "description": config.description
        };
    } 
    // B. 文章页
    else if (page.layout === 'post') {
        jsonLD = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": currentTitle,
            "image": [currentCover], // 现在这里是绝对路径且无换行的了
            "datePublished": page.date ? page.date.toISOString() : "",
            "dateModified": page.updated ? page.updated.toISOString() : "",
            "author": { "@type": "Person", "name": authorName, "url": config.url },
            "publisher": {
                "@type": "Organization",
                "name": siteTitle,
                "logo": { "@type": "ImageObject", "url": globalAvatar }
            },
            "description": description,
            "mainEntityOfPage": { "@type": "WebPage", "@id": currentUrl }
        };
    } 
    // C. 其他页面 (友链、关于、分类等)
    else {
        // 智能判断：如果是友链或关于，用 ProfilePage/CollectionPage，否则用 WebPage
        let type = "WebPage";
        if (page.type === 'about') type = "ProfilePage";
        if (page.type === 'link') type = "CollectionPage";
        
        jsonLD = {
            "@context": "https://schema.org",
            "@type": type,
            "name": currentTitle,
            "description": description,
            "url": currentUrl,
            "image": currentCover // 确保每个页面都有图
        };
    }

    // === 注入 ===
    if (jsonLD) {
        const script = `\n<script type="application/ld+json">${JSON.stringify(jsonLD)}</script>\n`;
        if (htmlContent.includes('</head>')) {
            return htmlContent.replace('</head>', script + '</head>');
        } else {
            return htmlContent + script;
        }
    }

    return htmlContent;
});