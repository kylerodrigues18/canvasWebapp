import { useEffect } from 'react'

const useCanvas = (draw, points, canvasRef) => {  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId
    
    const render = () => {
      draw(context, points)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw, points, canvasRef])
  
  return canvasRef
}

export default useCanvas