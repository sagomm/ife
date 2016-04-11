var page = {}
/**
 * 绘制背景
 */
page.drowBackground = function(canvas,box){
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
  box.drowBox();
}
/**
 * 画小方块
 */
