var data = [
    // cloud
{ value : 17120, name : '流泪' },
{ value : 10560, name : '长春' },
{ value : 5400, name : '泣不成声' },
{ value : 4520, name : '捂脸' },
{ value : 3760, name : '送心' },
{ value : 3300, name : '泪奔' },
{ value : 2520, name : '微笑' },
{ value : 2260, name : '猪头' },
{ value : 2240, name : '这有山' },
{ value : 2230, name : '好看' },
{ value : 2220, name : '迷路' },
{ value : 2060, name : '好吃' },
{ value : 1920, name : '这有' },
{ value : 1690, name : '喜欢' },
{ value : 1510, name : '咱俩' },
{ value : 1450, name : '发呆' },
{ value : 1440, name : '哈哈哈' },
{ value : 1430, name : '商场' },
{ value : 1390, name : '比心' },
{ value : 1320, name : '调皮' },
{ value : 1290, name : '观察' },
{ value : 1280, name : '好玩' },
{ value : 1270, name : '暗中' },
{ value : 990, name : '超级' },
{ value : 970, name : '万达' },
{ value : 960, name : '东西' },
{ value : 940, name : '不错' },
{ value : 940, name : '不吃' },
{ value : 940, name : '上次' },
{ value : 900, name : '下次' },
{ value : 900, name : '绝望' },
{ value : 890, name : '溜达' },
{ value : 890, name : '凝视' },
{ value : 890, name : '明白' },
{ value : 880, name : '东北' },
{ value : 880, name : '许愿' },
{ value : 870, name : '每次' },
{ value : 840, name : '这是' },
{ value : 790, name : '表情' },
{ value : 790, name : '不到' },
{ value : 770, name : '吉林' },
{ value : 760, name : '图片' },
{ value : 760, name : '感谢' },
{ value : 740, name : '啊啊啊' },
{ value : 740, name : '玫瑰' },
{ value : 740, name : '我要' },
{ value : 740, name : '香菜' },
{ value : 730, name : '小狗' },
{ value : 730, name : '拍照' },
{ value : 720, name : '无敌' },
{ value : 720, name : '..' },
{ value : 710, name : '带我去' },
{ value : 700, name : '同学' },
{ value : 690, name : '对面' },
{ value : 690, name : '哈哈哈哈' },
{ value : 680, name : '确实' },
{ value : 680, name : '一只' },
{ value : 670, name : '特别' },
{ value : 670, name : '吃饭' },
{ value : 670, name : '名字' },
{ value : 670, name : '营销' },
{ value : 650, name : '开心' },
{ value : 650, name : '刷到' },
{ value : 640, name : '推荐' },
{ value : 640, name : '小时' },
{ value : 640, name : '昨天' },
{ value : 640, name : '睡觉' },
{ value : 640, name : '宣传' },
{ value : 630, name : '礼貌' },
{ value : 620, name : '不失' },
{ value : 610, name : '不想' },
{ value : 610, name : '抱抱' },
{ value : 580, name : '好像' },
{ value : 570, name : '看着' },
{ value : 560, name : '记得' },
{ value : 560, name : '宕机' },
{ value : 560, name : '本地人' },
{ value : 560, name : '悲伤' },
{ value : 550, name : '可爱' },
{ value : 550, name : '小小' },
{ value : 550, name : '大笑' },
{ value : 540, name : '朋友' },
{ value : 540, name : '漂亮' },
{ value : 540, name : '星星' },
{ value : 540, name : '月亮' },
{ value : 540, name : '明天' },
{ value : 530, name : '鼓掌' },
{ value : 530, name : '草莓' },
{ value : 530, name : '美女' },
{ value : 520, name : '惊喜' },
{ value : 510, name : '打卡' },
{ value : 500, name : '时间' },
{ value : 500, name : '害羞' },
{ value : 500, name : '开学' },
{ value : 490, name : '好好看' },
{ value : 490, name : '大学' },
{ value : 480, name : '宇宙' },
{ value : 480, name : '第一次' },
{ value : 470, name : '居然' },
{ value : 470, name : '终于' },
{ value : 470, name : '逛逛' },
{ value : 460, name : '娃娃' },
{ value : 460, name : '不好' },
{ value : 460, name : 'AAA' },
{ value : 460, name : '机会' },
{ value : 460, name : '竟然' },
{ value : 460, name : '帅哥' },
{ value : 450, name : '啥时候' },
{ value : 440, name : '有人' },
{ value : 440, name : '很多' },
{ value : 430, name : '晚上' },
{ value : 420, name : '一点' },
{ value : 420, name : '榴莲' },
{ value : 420, name : '回去' },
{ value : 410, name : '全是' },
{ value : 410, name : '几次' },
{ value : 410, name : '带你去' },
{ value : 410, name : '大王' },
{ value : 400, name : '和尚' },
{ value : 400, name : '找到' }
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