import React, { Component } from 'react'





export default class Explore extends Component {
    render() {
        return (
            <div className="explore__container">
                <h1>
                   {this.props.title}
                </h1>
            <div className="explore__container--inner">
             {this.props.data.map((item,index) =>{return(
                    <div key={index} className="explore__container--inner-card">
                        <img src={item.url} alt="item"/>
                        <h2>{item.title}</h2>
                    </div>
                )})}
                </div>
               
            </div>
        )
    }
}
