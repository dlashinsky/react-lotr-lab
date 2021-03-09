import React from 'react'
import { Component } from 'react'




class Title extends Component{
    render() {
        return <h1>{this.props.titles}</h1>;
    }
}
class Hours extends Component{
    render() {
        return <p>{this.props.hours }</p>;
    }
}
class Minutes extends Component{
    render() {
        return <p>{this.props.minutes}</p>;
    }
}




class Movie extends Component {

    render () {

        const movieTitles = []
        const movieHours = []
        const movieMinutes = []
        const fellowship = []

        this.props.titles.forEach((title) =>fellowship.push(<Title titles={title}/>))
        this.props.hours.forEach(hour =>{fellowship.push(<Hours hours={hour}/>)})
        this.props.minutes.forEach(minute=>{fellowship.push(<Minutes minutes={minute}/>)})

        const movieDeets = fellowship.map(function (value, index){
            return
        })

        return (
            <div>
                <h1>{fellowship}</h1>

            </div>
        )

    }
}

export default Movie;