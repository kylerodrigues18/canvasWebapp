import React from 'react'
import useCanvas from './useCanvas'
import Points from './Points'

const Canvas = props => {
    const { draw, canvasRef } = props
    const p = new Points()
    const drawing = useCanvas(draw, p.state.points, canvasRef)
    return (
        <div>
            <canvas ref={drawing} onClick={p.addPoint}/>
            <button onClick={p.clearPoints}>CLEAR</button>
            <button onClick={p.exportPoints}>EXPORT</button>
        </div>
    )
}

export default Canvas