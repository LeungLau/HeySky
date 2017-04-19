var myChart = echarts.init(document.getElementById('canvas'));
option = {
    color: ['#5999EC'],
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '10%',
        top: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: ['#E5E5E5'],
                type: 'solid'
            }
        },
        axisTick: {
            show: false
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        name: '单位（人）',
        nameLocation: 'middle',
        nameGap: 20,
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: ['#E5E5E5'],
                type: 'solid'
            }
        },
        splitNumber: '8',
        min: '2',
        axisTick: {
            show: false
        }

    },
    series: [{
        name: '客户增量日曲线图',
        type: 'line',
        data: ['2', '4', '2', '6', '2', '2', '3'],
        label: {
            normal: {
                show: true,
                position: 'top' //值显示
            }
        }
    }]
};
myChart.setOption(option);