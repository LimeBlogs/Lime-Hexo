// 使用 var 替换 let，防止 PJAX 局部刷新时重复声明报错
var clockAnimationId = clockAnimationId || null;

// 入口：绑定事件
// 仅在首次加载时执行
if (!window.digitClockInitialized) {
    document.addEventListener("DOMContentLoaded", () => {
        initializeCard();
    });
    // 针对 PJAX 切换页面后的重新初始化
    document.addEventListener("pjax:complete", () => {
        initializeCard();
    });
    window.digitClockInitialized = true;
}

// 主初始化函数
function initializeCard() {
    cardTimes();        // 初始化日历
    cardRefreshTimes(); // 初始化倒计时
    initDigitClock();   // 初始化数字时钟
}

// --- 1. 日历与倒计时逻辑 ---
// 同样建议使用 var 或确保在函数内部定义，避免全局污染报错
var year, month, week, date, dates, weekStr, monthStr, asideTime, asideDay, asideDayNum, animalYear, ganzhiYear, lunarMon, lunarDay;

function cardRefreshTimes() {
    const e = document.getElementById("card-widget-schedule");
    if (e) {
        const currentNow = new Date(); 
        asideDay = (currentNow - asideTime) / 1e3 / 60 / 60 / 24;
        e.querySelector("#pBar_year").value = asideDay;
        e.querySelector("#p_span_year").innerHTML = (asideDay / 365 * 100).toFixed(1) + "%";
        e.querySelector(".schedule-r0 .schedule-d1 .aside-span2").innerHTML = `还剩<a> ${(365 - asideDay).toFixed(0)} </a>天`;
        e.querySelector("#pBar_month").value = date;
        e.querySelector("#pBar_month").max = dates;
        e.querySelector("#p_span_month").innerHTML = (date / dates * 100).toFixed(1) + "%";
        e.querySelector(".schedule-r1 .schedule-d1 .aside-span2").innerHTML = `还剩<a> ${(dates - date)} </a>天`;
        e.querySelector("#pBar_week").value = week === 0 ? 7 : week;
        e.querySelector("#p_span_week").innerHTML = ((week === 0 ? 7 : week) / 7 * 100).toFixed(1) + "%";
        e.querySelector(".schedule-r2 .schedule-d1 .aside-span2").innerHTML = `还剩<a> ${(7 - (week === 0 ? 7 : week))} </a>天`;
    }
}

function cardTimes() {
    const currentNow = new Date();
    year = currentNow.getFullYear();
    month = currentNow.getMonth();
    week = currentNow.getDay();
    date = currentNow.getDate();

    const e = document.getElementById("card-widget-calendar");
    if (e) {
        const c = e.querySelector("#calendar-main");
        c.innerHTML = ""; 
        
        const isLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        weekStr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][week];
        const monthData = [
            { month: "1月", days: 31 }, { month: "2月", days: isLeapYear ? 29 : 28 },
            { month: "3月", days: 31 }, { month: "4月", days: 30 },
            { month: "5月", days: 31 }, { month: "6月", days: 30 },
            { month: "7月", days: 31 }, { month: "8月", days: 31 },
            { month: "9月", days: 30 }, { month: "10月", days: 31 },
            { month: "11月", days: 30 }, { month: "12月", days: 31 }
        ];
        monthStr = monthData[month].month;
        dates = monthData[month].days;

        const t = (week + 8 - date % 7) % 7;
        let n = "", d = false, s = 7 - t;
        const o = (dates - s) % 7 === 0 ? Math.floor((dates - s) / 7) + 1 : Math.floor((dates - s) / 7) + 2;
        const l = e.querySelector("#calendar-date");

        if(l) l.style.fontSize = ["64px", "48px", "36px"][Math.min(o - 3, 2)];

        for (let i = 0; i < o; i++) {
            c.innerHTML += `<div class='calendar-r${i}'></div>`;
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j === t) { n = 1; d = true; }
                const r = n === date ? " class='now'" : "";
                c.querySelector(`.calendar-r${i}`).innerHTML += `<div class='calendar-d${j}'><a${r}>${n}</a></div>`;
                if (n >= dates) { n = ""; d = false; }
                if (d) { n += 1; }
            }
        }

        if (typeof chineseLunar !== 'undefined') {
            const lunarDate = chineseLunar.solarToLunar(new Date(year, month, date));
            animalYear = chineseLunar.format(lunarDate, "A");
            ganzhiYear = chineseLunar.format(lunarDate, "T").slice(0, -1);
            lunarMon = chineseLunar.format(lunarDate, "M");
            lunarDay = chineseLunar.format(lunarDate, "d");
            e.querySelector("#calendar-lunar").innerHTML = `${ganzhiYear}${animalYear}年&nbsp;${lunarMon}${lunarDay}`;
        }

        const newYearDate = new Date("2026/02/16 00:00:00");
        const daysUntilNewYear = Math.floor((newYearDate - currentNow) / 1e3 / 60 / 60 / 24);
        asideTime = new Date(`${currentNow.getFullYear()}/01/01 00:00:00`);
        asideDay = (currentNow - asideTime) / 1e3 / 60 / 60 / 24;
        asideDayNum = Math.floor(asideDay);
        const weekNum = week - asideDayNum % 7 >= 0 ? Math.ceil(asideDayNum / 7) : Math.ceil(asideDayNum / 7) + 1;

        e.querySelector("#calendar-week").innerHTML = `第${weekNum}周&nbsp;${weekStr}`;
        e.querySelector("#calendar-date").innerHTML = date.toString().padStart(2, "0");
        e.querySelector("#calendar-solar").innerHTML = `${year}年${monthStr}&nbsp;第${asideDay.toFixed(0)}天`;
        const scheduleDays = document.getElementById("schedule-days");
        if(scheduleDays) scheduleDays.innerHTML = daysUntilNewYear;
    }
}

// --- 2. 数字时钟逻辑 ---
function initDigitClock() {
    const container = document.getElementById("card-digit-clock");
    if (!container) return; 

    // 清理：确保不会有多个 requestAnimationFrame 同时跑
    if (clockAnimationId) {
        cancelAnimationFrame(clockAnimationId);
        clockAnimationId = null;
    }
    container.innerHTML = ''; 

    var _time10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var _time6 = _time10.slice(0, 6);
    var _time3 = _time10.slice(0, 3);
    var _Structure = [
        [_time3, _time10],
        [_time6, _time10],
        [_time6, _time10]
    ];

    var clock = document.createElement('div');
    clock.id = 'clock';
    container.appendChild(clock);

    var digitGroups = [];
    _Structure.forEach(digits => {
        var digitGroup = document.createElement('div');
        digitGroup.classList.add('digit-group');
        clock.appendChild(digitGroup);
        digitGroups.push(digitGroup);
        digits.forEach(digitList => {
            var digit = document.createElement('div');
            digit.classList.add('digit');
            digitList.forEach(n => {
                var ele = document.createElement('div');
                ele.classList.add('digit-number');
                ele.innerText = n;
                digit.appendChild(ele);
            });
            digitGroup.appendChild(digit);
        });
    });

    function update() {
        var dateNow = new Date();
        var time = [dateNow.getHours(), dateNow.getMinutes(), dateNow.getSeconds()]
            .map(n => `0${n}`.slice(-2).split('').map(e => +e))
            .reduce((p, n) => p.concat(n), []);
            
        time.forEach((n, i) => {
            var groupIdx = Math.floor(i / 2);
            var digitIdx = i % 2;
            var digitElements = digitGroups[groupIdx].children[digitIdx].children;
            for(let j=0; j<digitElements.length; j++) {
                digitElements[j].classList[j === n ? 'add' : 'remove']('bright');
            }
        });
        
        clockAnimationId = requestAnimationFrame(update);
    }

    update();
}