import React, { Component } from "react";
import "./Card.css"
class Card extends Component{
    render(){
        return(<div className="Card">
            <div className="Card-img" style={{backgroundImage:`url(https://robohash.org/${this.props.id})`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
            <p>{this.props.name}</p>
            <p>{this.props.email}</p>
        </div>)
    }

}

export default Card;