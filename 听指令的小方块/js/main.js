var page = {}
page.init = function(){
  /**
   * 页面布局初始化
   */
  var background = document.getElementById('background');
  var box = document.getElementById('box');
  page.drowBackground(background);
  page.drowBox(box,'UP');
  page.addBox(background,box);
  /**
   * 更改方块的位置
   */
  page.changeBox();
}

/**
 * 绘制背景
 */
page.drowBackground = function(canvas){
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = '#ccc';
  ctx.beginPath();
  for(var i = 1 ;i < 10 ;i++){
    /**
     * 绘制纵向网格线
     */
    ctx.moveTo(i*50,0);
    console.log(1);
    ctx.lineTo(i*50,500);
    /**
     * 绘制横向网格线
     */
     ctx.moveTo(0,i*50);
     ctx.lineTo(500,i*50);
     ctx.stroke();
  }
  ctx.closePath();
}
/**
 * 画小方块
 */
page.drowBox = function(canvas,statu){
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = 'red';
  ctx.fillRect(0,0,50,50);
  ctx.fillStyle = 'blue';
  switch (statu) {
    case 'LEF':
      ctx.fillRect(0,0,15,50);
      break;
    case 'RIG':
      ctx.fillRect(35,0,15,30);
      break;
    case 'UP' :
      ctx.fillRect(0, 0, 50, 15);
      break;
    case 'DOWN' :
      ctx.fillRect(0, 35, 50, 15);
      break;
    default:
      break;
  }
}
/**
 * 将小方块添加到背景中
 */
page.addBox = function(background,box){
  var ctx = background.getContext("2d");
  ctx.drawImage(box, 0, 0);
}
/**
 * 改变小方块的状态与位置
 */
 page.boxChange(x,y,statu){
   
 }
