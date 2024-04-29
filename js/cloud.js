var data = [
    // cloud
{ value : 10430, name : '长春' },
{ value : 2350, name : '这有山' },
{ value : 2200, name : '好看' },
{ value : 2200, name : '迷路' },
{ value : 2000, name : '这有' },
{ value : 1910, name : '好吃' },
{ value : 1510, name : '咱俩' },
{ value : 1430, name : '商场' },
{ value : 1260, name : '好玩' },
{ value : 1240, name : '哈哈哈' },
{ value : 1180, name : '喜欢' },
{ value : 950, name : '万达' },
{ value : 950, name : '东西' },
{ value : 940, name : '不错' },
{ value : 940, name : '上次' },
{ value : 920, name : '这是' },
{ value : 880, name : '明白' },
{ value : 870, name : '每次' },
{ value : 870, name : '溜达' },
{ value : 830, name : '许愿' },
{ value : 810, name : '下次' },
{ value : 780, name : '我要' },
{ value : 740, name : '不到' },
{ value : 730, name : '拍照' },
{ value : 710, name : '吉林' },
{ value : 700, name : '东北' },
{ value : 690, name : '带我去' },
{ value : 690, name : '刷到' },
{ value : 680, name : '确实' },
{ value : 660, name : '啊啊啊' },
{ value : 660, name : '对面' },
{ value : 660, name : '营销' },
{ value : 640, name : '宣传' },
{ value : 630, name : '推荐' },
{ value : 630, name : '昨天' },
{ value : 610, name : '特别' },
{ value : 590, name : '哈哈哈哈' },
{ value : 570, name : '看着' },
{ value : 560, name : '小时' },
{ value : 560, name : '本地人' },
{ value : 540, name : '好像' },
{ value : 540, name : '超级' },
{ value : 510, name : '打卡' },
{ value : 490, name : '好好看' },
{ value : 480, name : '第一次' },
{ value : 480, name : '大学' },
{ value : 470, name : '时间' },
{ value : 470, name : '逛逛' },
{ value : 470, name : '开学' },
{ value : 460, name : '居然' },
{ value : 460, name : '终于' },
{ value : 460, name : '竟然' },
{ value : 450, name : '吃饭' },
{ value : 450, name : '机会' },
{ value : 440, name : '啥时候' },
{ value : 430, name : '有人' },
{ value : 430, name : '漂亮' },
{ value : 420, name : '不好' },
{ value : 420, name : '晚上' },
{ value : 410, name : '娃娃' },
{ value : 410, name : '朋友' },
{ value : 410, name : '几次' },
{ value : 410, name : '回去' },
{ value : 400, name : '和尚' },
{ value : 400, name : '找到' },
{ value : 400, name : '很多' },
{ value : 400, name : '带你去' },
{ value : 400, name : '毕业' },
{ value : 390, name : '全是' },
{ value : 390, name : '有没有' },
{ value : 390, name : '明天' },
{ value : 390, name : '有个' },
{ value : 380, name : '好多' },
{ value : 380, name : '旁边' },
{ value : 360, name : '视频' },
{ value : 350, name : '门口' },
{ value : 350, name : '特色' },
{ value : 350, name : '记得' },
{ value : 340, name : '建议' },
{ value : 340, name : '几天' },
{ value : 340, name : '回来' },
{ value : 340, name : '适合' },
{ value : 330, name : '美食' },
{ value : 330, name : '他家' },
{ value : 320, name : '啥意思' },
{ value : 320, name : '个币' },
{ value : 320, name : '一家' },
{ value : 310, name : '人太多' },
{ value : 310, name : '出息' },
{ value : 300, name : '人多' },
{ value : 300, name : '玩意' },
{ value : 300, name : '为啥' },
{ value : 300, name : '哈尔滨' },
{ value : 300, name : '卧槽' },
{ value : 300, name : '杭州' },
{ value : 290, name : '谢谢' },
{ value : 290, name : '五一' },
{ value : 290, name : '四年' },
{ value : 280, name : '几点' },
{ value : 280, name : '嘎嘎' },
{ value : 280, name : '评论' },
{ value : 280, name : '盖章' },
{ value : 270, name : '一点' },
{ value : 270, name : '希望' },
{ value : 260, name : '旅游' },
{ value : 260, name : '重庆' },
{ value : 260, name : '块钱' },
{ value : 260, name : '好美' },
{ value : 260, name : '不想' },
{ value : 260, name : '真的假' },
{ value : 260, name : '榴莲' },
{ value : 250, name : '那天' },
{ value : 250, name : '照片' },
{ value : 250, name : '肘子' },
{ value : 240, name : '孩子' },
{ value : 240, name : '几个' },
{ value : 240, name : '花钱' },
{ value : 240, name : '妈呀' },
{ value : 230, name : '我家' },
{ value : 230, name : '没意思' }
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