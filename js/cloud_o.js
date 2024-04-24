var data = [
    // cloud
    {name: '词语1', value: 100},{name: '词语2', value: 80},{name: '词语3', value: 60},{name: '词语4', value: 40},{name: '词语5', value: 20},
  ];

  // 初始化 ECharts 实例
  var myChart = echarts.init(document.getElementById('word-cloud'));

  let randcolor = () => {
  let r = 100 + ~~(Math.random() * 100);
  let g = 135 + ~~(Math.random() * 100);
  let b = 100 + ~~(Math.random() * 100);
  return `rgb(${r}, ${g}, ${b})`
}

  // 配置词云图参数
  var option = {
    series: [{
      type: 'wordCloud',
      shape: 'circle',
      left: 'center',
      top: 'center',
      width: '95%',
      height: '90%',
      right: null,
      bottom: null,
      sizeRange: [28, 260],
      rotationRange: [-90, 90],
      rotationStep: 90,
      gridSize: 12,
      drawOutOfBound: false,
      textStyle: {
                      
          color: params => {
              return randcolor();
          },
          fontWeight: 'normal',
          fontFamily: 'FangSong',
          
          
      },
      emphasis: {
        shadowBlur: 15,
        shadowColor: '#333',
        textStyle: {
            fontWeight: 'bold',
        }
      },
      data: data
    }]
  };

  // 渲染词云图
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  })