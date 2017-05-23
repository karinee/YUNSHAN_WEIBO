/**
 * Created by kalin on 2017/5/22.
 */
var myChart=echarts.init(document.getElementById('location'));
var option = {
    backgroundColor: '#DEFCF9',
    tooltip:{
      trigger:'item'
    },
    visualMap: {
        min: 0,
        max: 500,
        left:'left',
        top:'bottom',
        padding:[20,30],
        text:['高','低'],
        calculable:true,
        color:['#1B8057','#90EEE1'],
        markPoint:{
            label:{
                normal:{
                    show: true
                },
                emphasis:{
                    show:true
                }
            }
        },
        textStyle: {
            color: '#213458'
        }
    },
    series: [
        {
        name: '读者地域分布',
        type: 'map',
        mapType: 'china',
        label: {
            normal:{
                show:true
            },
            emphasis: {
                show: true,
                textStyle:{
                    color:'#ffffff',
                    fontSize:18
                }
            }
        },
        roam: true,
        itemStyle: {
            emphasis: {
                label:{
                    show:true
                },
                areaColor:  '#cb3a3a'
            }
        },
        data: [
            {name: '北京',value: 420 },
            {name: '天津',value: 150 },
            {name: '上海',value: 320 },
            {name: '重庆',value:150 },
            {name: '河北',value: 36 },
            {name: '河南',value: 57 },
            {name: '云南',value: 88 },
            {name: '辽宁',value: 130 },
            {name: '黑龙江',value: 118 },
            {name: '湖南',value: 390 },
            {name: '安徽',value: 280 },
            {name: '山东',value: 139 },
            {name: '新疆',value: 44 },
            {name: '江苏',value: 258 },
            {name: '浙江',value: 255 },
            {name: '江西',value: 240 },
            {name: '湖北',value: 214 },
            {name: '广西',value: 146 },
            {name: '甘肃',value: 21 },
            {name: '山西',value: 231 },
            {name: '内蒙古',value: 168 },
            {name: '陕西',value: 179 },
            {name: '吉林',value: 214 },
            {name: '福建',value: 380 },
            {name: '贵州',value: 215 },
            {name: '广东',value: 500 },
            {name: '青海',value: 290 },
            {name: '西藏',value: 146 },
            {name: '四川',value: 400 },
            {name: '宁夏',value: 216 },
            {name: '海南',value: 320 },
            {name: '台湾',value: 300 },
            {name: '香港',value: 240 },
            {name: '澳门',value: 360 }
        ]
    }]
};
myChart.setOption(option);