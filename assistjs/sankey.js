var dom = document.getElementById("sankey");
var myChart = echarts.init(dom);
var app = {};

var option;



option = {
    series: {
        type: 'sankey',
        layout: 'none',
        emphasis: {
            focus: 'adjacency'
        },
        data: [{
            name: '入口进入'
        }, {
            name: '出口进入'
        }, {
            name: '入口离开'
        }, {
            name: '出口离开'
        }, {
            name: '食堂就餐'
        }, {
            name: '打包'
        }, {
            name: '11:43前原有人数'
        }
        ],
        //出口进入132，入口进入628，出口离开700，入口离开288，出口盒饭98，入口盒饭102
        //盒饭占比200/760=0.263
        links: [{
            source: '入口进入',
            target: '打包',
            value: 165
        }, {
            source: '出口进入',
            target: '打包',
            value: 35
        }, {
            source: '出口进入',
            target: '食堂就餐',
            value: 97
        }, {
            source: '入口进入',
            target: '食堂就餐',
            value: 463
        }, {
            source: '食堂就餐',
            target: '出口离开',
            value: 516
        }, {
            source: '食堂就餐',
            target: '入口离开',
            value: 212
        }, {
            source: '打包',
            target: '出口离开',
            value: 284
        }, {
            source: '打包',
            target: '入口离开',
            value: 76
        },{
            source: '11:43前原有人数',
            target: '食堂就餐',
            value: 168
        }

        ]
    }
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
