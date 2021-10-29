import React from 'react'


class Points extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            points: [{ x:0, y:0 }]
        }
    }

    componentDidMount() {
        this.addPoint = this.addPoint.bind(this)
        this.clearPoints = this.clearPoints.bind(this)
    }

    addPoint = (event) => {
        const currentCoord = { x:event.clientX, y:event.clientY }
        this.setState({
            points: this.state.points.push(currentCoord)
        })
    }
    
    clearPoints = () => {
        const list = this.state.points
        for(var i=list.length-1; i>0; i--) { list.pop(i); }

        this.setState({
            points: list
        })
    }

    exportPoints = () => {
        const csvString = [
            ["x", "y"],
            ...this.state.points.map(item => [
                item.x,
                item.y
            ])
        ].map(e => e.join(",")).join("\n")

        let csvData = new Blob([csvString], { type: 'text/csv' });  
        let csvUrl = URL.createObjectURL(csvData);

        let hiddenElement = document.createElement('a');
        hiddenElement.href = csvUrl;
        hiddenElement.target = '_blank';
        hiddenElement.download = "points.csv";
        hiddenElement.click();
    }

    render() {
        return this.state.points
    }
}

export default Points