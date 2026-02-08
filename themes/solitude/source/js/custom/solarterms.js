(function() {
    // 1. 节气计算核心算法 (保持不变)
    function getSolarTerm(year, month, day) {
        var termNames = [
            "小寒", "大寒", "立春", "雨水", "惊蛰", "春分",
            "清明", "谷雨", "立夏", "小满", "芒种", "夏至",
            "小暑", "大暑", "立秋", "处暑", "白露", "秋分",
            "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"
        ];
        const termDays = [5, 20, 4, 19, 5, 20, 4, 20, 5, 21, 6, 21, 7, 22, 7, 23, 7, 23, 8, 23, 7, 22, 7, 21];
        let termIndex = (month - 1) * 2;
        if (day < termDays[termIndex]) {
            termIndex -= 1;
        } else if (day >= termDays[termIndex + 1]) {
            termIndex += 1;
        }
        if (termIndex < 0) return "冬至";
        return termNames[termIndex];
    }

    // 2. 根据节气判断季节 (新增功能)
    function getSeason(term) {
        const springTerms = ["立春", "雨水", "惊蛰", "春分", "清明", "谷雨"];
        const summerTerms = ["立夏", "小满", "芒种", "夏至", "小暑", "大暑"];
        const autumnTerms = ["立秋", "处暑", "白露", "秋分", "寒露", "霜降"];
        
        if (springTerms.includes(term)) return 'spring';
        if (summerTerms.includes(term)) return 'summer';
        if (autumnTerms.includes(term)) return 'autumn';
        return 'winter'; // 剩下的就是冬天 (立冬~大寒)
    }

    // 3. 执行更新逻辑 (合并了菜单文字和背景图片)
    function updateSolarFeatures() {
        const now = new Date();
        const term = getSolarTerm(now.getFullYear(), now.getMonth() + 1, now.getDate());
        const season = getSeason(term);

        // --- A. 更新菜单文字 (原功能) ---
        const menuItems = document.querySelectorAll('#menus .site-page');
        menuItems.forEach(item => {
            if (item.textContent.includes('节气')) {
                const spanTag = item.querySelector('span');
                if (spanTag) spanTag.innerText = ' ' + term;
            }
        });

        // --- B. 更新背景图片 (新功能) ---
        // Butterfly 主题的背景 ID 通常是 #web_bg
        const bgElement = document.getElementById('global_bg');
        if (bgElement) {
            // 拼接图片路径：/LimePan/seasons/spring.png
            const bgUrl = `/LimePan/seasons/${season}.webp`;
            
            // 强制覆盖背景样式
            bgElement.style.backgroundImage = `url('${bgUrl}')`;
            
            // 打印日志方便调试 (按F12可以看到)
            console.log(`当前节气: ${term}, 切换背景为: ${season}.webp`);
        }
    }

    // 4. 绑定事件
    document.addEventListener('DOMContentLoaded', updateSolarFeatures);
    document.addEventListener('pjax:complete', updateSolarFeatures);

})();