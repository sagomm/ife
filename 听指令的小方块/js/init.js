var page = {}

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
page.box = function(canvas,x,y){
  if(0>x && x<500 && y>0 && y<500){
      var ctx = canvas.getContext("2d");

  }else{
    throw('box x , y error');
  }
}
page.box = {
  
}
