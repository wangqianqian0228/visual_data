var t = null;
t = setTimeout(time, 1000); //開始运行
function time() {
    clearTimeout(t); //清除定时器
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours(); //获取时
    var m = dt.getMinutes(); //获取分
    var s = dt.getSeconds(); //获取秒
    document.querySelector(".show-time").innerHTML = '当前时间：' + y + "年" + mt + "月" + day + '日' + "-" + h + "时" + m + "分" + s + "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行     
}

// 柱形图-就业行业
(function () {
    var mycharts = echarts.init(document.querySelector('.bar .panel-chart'));
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '10px',
            left: '0%',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12'
            },
            axisLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },

            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1) '

                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                barBorderRadius: 5
            }

        }]
    };
    mycharts.setOption(option);
    // 让图表跟着窗口适配
    window.addEventListener('resize', function () {
        mycharts.resize();
    })

})();
// 柱状图-技能掌握
(function () {
    var mycharts = echarts.init(document.querySelector('.skill .panel-chart'));
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var option = {
        grid: {
            top: "2%",
            left: "22%",
            bottom: "10%"
        },
        xAxis: {
            show: false
        },
        // y轴有两组数据
        yAxis: [
            {
                type: 'category',
                // data数据进行翻转，对应的series里面的数据也会跟着翻转。
                inverse: true,
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                //不显示y轴线条
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                },
            },
            {
                type: 'category',
                // 第二个y轴上的数据
                inverse: true,
                data: [702, 350, 610, 793, 664],
                //不显示y轴线条
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                },
            },
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                // 第一组数据的内容大小
                data: [70, 34, 60, 78, 69],
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                // 柱子设为圆角
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        // 给每一个柱子设置不同的颜色
                        // params:是每一个柱子对象
                        // dataIndex：每一个柱子的索引
                        color: function (params) {
                            return myColor[params.dataIndex];
                        }
                    },

                },
                // 图形上的文本标签
                label: {
                    normal: {
                        show: true,
                        // 图形内显示
                        position: "inside",
                        // 文字的显示格式
                        formatter: "{c}%"
                    }
                },
                yAxisIndex: 0,

            },
            {
                name: '框',
                type: 'bar',
                // 第二组数据的内容大小
                data: [100, 100, 100, 100, 100],
                barCategoryGap: 50,
                barWidth: 15,
                // 第二组不要内置颜色，只设置边框就行了
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15

                },
                yAxisIndex: 1,
            }
        ]
    };


    mycharts.setOption(option);
    // 让图表跟着窗口适配
    window.addEventListener('resize', function () {
        mycharts.resize();
    })

})();