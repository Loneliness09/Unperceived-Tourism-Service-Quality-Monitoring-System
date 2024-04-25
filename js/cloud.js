var data = [
    // cloud
{ value : 21720, name : '长春' },
{ value : 8930, name : '流泪' },
{ value : 7980, name : '比心' },
{ value : 7250, name : '捂脸' },
{ value : 7110, name : '净月潭' },
{ value : 6350, name : '东北' },
{ value : 4380, name : '吉林' },
{ value : 3780, name : '玫瑰' },
{ value : 3630, name : '谢谢' },
{ value : 3600, name : '泣不成声' },
{ value : 3370, name : '喜欢' },
{ value : 3270, name : '抱抱' },
{ value : 3250, name : '鼓掌' },
{ value : 3220, name : '感谢' },
{ value : 2810, name : '微笑' },
{ value : 2780, name : '泪奔' },
{ value : 2470, name : '家乡' },
{ value : 2380, name : '好玩' },
{ value : 2170, name : '好看' },
{ value : 1770, name : '吓人' },
{ value : 1750, name : '夏天' },
{ value : 1710, name : '浪漫' },
{ value : 1660, name : '送心' },
{ value : 1610, name : '哈尔滨' },
{ value : 1610, name : '宣传' },
{ value : 1500, name : '城市' },
{ value : 1430, name : '视频' },
{ value : 1420, name : '冬天' },
{ value : 1400, name : '吉林市' },
{ value : 1320, name : '希望' },
{ value : 1270, name : '雾凇' },
{ value : 1270, name : '恐怖' },
{ value : 1260, name : '来到' },
{ value : 1260, name : '冰雪' },
{ value : 1250, name : '推荐' },
{ value : 1240, name : '蚊子' },
{ value : 1190, name : '开心' },
{ value : 1180, name : '发呆' },
{ value : 1180, name : '南方' },
{ value : 1170, name : '加油' },
{ value : 1090, name : '文旅' },
{ value : 1060, name : '害怕' },
{ value : 1060, name : '小土豆' },
{ value : 1030, name : '缆车' },
{ value : 1020, name : '朋友' },
{ value : 940, name : '不错' },
{ value : 940, name : '美丽' },
{ value : 910, name : '生活' },
{ value : 910, name : '猪头' },
{ value : 910, name : '观察' },
{ value : 900, name : '长影' },
{ value : 900, name : '暗中' },
{ value : 870, name : '哈哈哈' },
{ value : 860, name : '很多' },
{ value : 830, name : '本地人' },
{ value : 820, name : '漂亮' },
{ value : 810, name : '特别' },
{ value : 800, name : '吓死' },
{ value : 790, name : '晚上' },
{ value : 790, name : '灵机一动' },
{ value : 770, name : '旅游' },
{ value : 770, name : '宕机' },
{ value : 760, name : '发现' },
{ value : 750, name : '啊啊啊' },
{ value : 740, name : '礼貌' },
{ value : 740, name : '活跃' },
{ value : 730, name : '不失' },
{ value : 720, name : '美的' },
{ value : 720, name : '美好' },
{ value : 710, name : '好美' },
{ value : 710, name : '下次' },
{ value : 710, name : '大笑' },
{ value : 700, name : '沈阳' },
{ value : 690, name : '时间' },
{ value : 690, name : '世界' },
{ value : 680, name : '孩子' },
{ value : 680, name : '音乐' },
{ value : 660, name : '公园' },
{ value : 660, name : '体验' },
{ value : 660, name : '秋天' },
{ value : 660, name : '长白山' },
{ value : 660, name : '感动' },
{ value : 650, name : '公主' },
{ value : 650, name : '姑娘' },
{ value : 640, name : '好吃' },
{ value : 630, name : '皇宫' },
{ value : 630, name : '世纪' },
{ value : 610, name : '超级' },
{ value : 610, name : '溜达' },
{ value : 610, name : '黑龙江' },
{ value : 600, name : '这是' },
{ value : 600, name : '热情' },
{ value : 600, name : '图片' },
{ value : 590, name : '好像' },
{ value : 580, name : '伪满' },
{ value : 580, name : '表情' },
{ value : 580, name : '账号' },
{ value : 570, name : '新天地' },
{ value : 570, name : '景色' },
{ value : 560, name : '一点' },
{ value : 560, name : '开车' },
{ value : 560, name : '评论' },
{ value : 560, name : '宝宝' },
{ value : 540, name : '景点' },
{ value : 540, name : '有没有' },
{ value : 540, name : '门票' },
{ value : 530, name : '值得' },
{ value : 530, name : '治愈' },
{ value : 530, name : '咱俩' },
{ value : 530, name : '为啥' },
{ value : 520, name : '攻略' },
{ value : 520, name : '可爱' },
{ value : 520, name : '森林' },
{ value : 510, name : '美景' },
{ value : 510, name : '欢迎您' },
{ value : 510, name : '回家' },
{ value : 510, name : '关灯' },
{ value : 500, name : '爱心' },
{ value : 500, name : '换个' },
{ value : 490, name : '建议' }
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