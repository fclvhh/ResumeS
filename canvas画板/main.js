// 得到一个画布
var canvas = document.getElementById("canvas")
// 得到一个画笔
var ctx = canvas.getContext("2d")
//  开启一个路径
ctx.beginPath()
// 移动笔触
ctx.moveTo(50,50)
//开始画
ctx.lineTo(50,150)
ctx.lineTo(150,120)
ctx.strokeStyle = rgb(0,0,0)
ctx.stroke()
// 結束路径
ctx.closePath()