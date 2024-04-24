var data = [
    // cloud
{ value : 4390, name : '长影' },
{ value : 3650, name : '世纪' },
{ value : 2480, name : '长春' },
{ value : 1380, name : '电影' },
{ value : 1330, name : '项目' },
{ value : 1030, name : '打卡' },
{ value : 1020, name : '体验' },
{ value : 740, name : '孩子' },
{ value : 660, name : '青年' },
{ value : 580, name : '门票' },
{ value : 570, name : '排队' },
{ value : 530, name : '好玩' },
{ value : 510, name : '华夏' },
{ value : 510, name : '翱翔' },
{ value : 510, name : '小时' },
{ value : 480, name : '机会' },
{ value : 460, name : '号线' },
{ value : 380, name : '希望' },
{ value : 370, name : '六号' },
{ value : 340, name : '期待' },
{ value : 330, name : '免费' },
{ value : 310, name : '开通' },
{ value : 290, name : '不错' },
{ value : 280, name : '后悔' },
{ value : 280, name : '星际' },
{ value : 260, name : '一张' },
{ value : 260, name : '值得' },
{ value : 250, name : '时间' },
{ value : 250, name : '大学' },
{ value : 250, name : '很多' },
{ value : 250, name : '魅力' },
{ value : 240, name : '上学' },
{ value : 230, name : '探险' },
{ value : 230, name : '票价' },
{ value : 230, name : '游玩' },
{ value : 220, name : '团团' },
{ value : 210, name : '极速' },
{ value : 210, name : '喜欢' },
{ value : 210, name : '视频' },
{ value : 210, name : '越来越' },
{ value : 210, name : '科技' },
{ value : 200, name : '实验室' },
{ value : 200, name : '刺激' },
{ value : 200, name : '小时候' },
{ value : 200, name : '好好' },
{ value : 200, name : '地铁' },
{ value : 190, name : '买票' },
{ value : 190, name : '不想' },
{ value : 190, name : '朋友' },
{ value : 190, name : '吉林' },
{ value : 190, name : '城市' },
{ value : 180, name : '前去' },
{ value : 180, name : '穿梭' },
{ value : 180, name : '特别' },
{ value : 180, name : '快乐' },
{ value : 180, name : '本地人' },
{ value : 180, name : '旅游' },
{ value : 170, name : '昨天' },
{ value : 170, name : '开放' },
{ value : 170, name : '更新' },
{ value : 170, name : '迪士尼' },
{ value : 170, name : '清明' },
{ value : 170, name : '世界' },
{ value : 170, name : '美丽' },
{ value : 160, name : '建议' },
{ value : 160, name : '活动' },
{ value : 160, name : '文化' },
{ value : 160, name : '美好' },
{ value : 160, name : '大学生' },
{ value : 150, name : '没意思' },
{ value : 150, name : '小学' },
{ value : 150, name : '便宜' },
{ value : 150, name : '一点' },
{ value : 150, name : '抖音' },
{ value : 150, name : '景点' },
{ value : 150, name : '开心' },
{ value : 150, name : '好看' },
{ value : 150, name : '特效' },
{ value : 150, name : '多年' },
{ value : 150, name : '中国' },
{ value : 150, name : '正好' },
{ value : 150, name : '通票' },
{ value : 150, name : '发展' },
{ value : 150, name : '太贵' },
{ value : 150, name : '英文' },
{ value : 140, name : '夜场' },
{ value : 140, name : '超级' },
{ value : 140, name : '哈尔滨' },
{ value : 130, name : '不好玩' },
{ value : 130, name : '道具' },
{ value : 130, name : '确实' },
{ value : 130, name : '震撼' },
{ value : 130, name : '宣传' },
{ value : 130, name : '哈哈哈' },
{ value : 130, name : '五一' },
{ value : 130, name : '参观' },
{ value : 130, name : '有趣' },
{ value : 130, name : '制作' },
{ value : 120, name : '溜达' },
{ value : 120, name : '不行' },
{ value : 120, name : '游客' },
{ value : 120, name : '东北' },
{ value : 120, name : '假期' },
{ value : 120, name : '艺术' },
{ value : 110, name : '年前' },
{ value : 110, name : '推荐' },
{ value : 110, name : '景区' },
{ value : 110, name : '收费' },
{ value : 110, name : '第一次' },
{ value : 110, name : '打算' },
{ value : 110, name : '可爱' },
{ value : 110, name : '谢谢' },
{ value : 110, name : '记得' },
{ value : 110, name : '一圈' },
{ value : 110, name : '设备' },
{ value : 110, name : '垃圾' },
{ value : 110, name : '建筑' },
{ value : 110, name : '仿佛' },
{ value : 110, name : '梦幻' },
{ value : 110, name : '一场' }
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