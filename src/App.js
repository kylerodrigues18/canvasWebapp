import { useRef } from 'react'
import Canvas from './Canvas'

//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
//https://medium.com/@martin.crabtree/react-creating-an-interactive-canvas-component-e8e88243baf6
function App() {
  const drawPlayingField = (ctx, points) => {
    //Clear field/robots
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Playing Field
    // 6 feet by 6 feet, robot is .183727 feet
    ctx.canvas.width = 600
    ctx.canvas.height = 600
    ctx.strokeStyle = '#000000'
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.stroke()

    // Robots?
    // Fill first point
    ctx.fillRect(points[0].x, points[0].y, 18, 18)

    ctx.fillStyle = '#0000FF'
    let len = points.length
    for (let i=1; i < len; i++) {
      if (points[i].x > 10 && points[i].y > 10) {
        ctx.fillRect(points[i].x - 10, points[i].y - 10, 18, 18)
      } else {
        ctx.fillRect(points[i].x, points[i].y, 18, 18)
      }
      ctx.beginPath();
      ctx.moveTo(points[i-1].x, points[i-1].y);
      ctx.lineTo(points[i].x, points[i].y);
      ctx.stroke();
    }
  }

  const canvas = useRef(null)

  return (
    <div>
      <Canvas draw={drawPlayingField} canvasRef={canvas}/>
    </div>
  ) 
}

export default App

