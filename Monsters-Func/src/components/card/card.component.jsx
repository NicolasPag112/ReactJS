import { Component } from "react";
import './card.styles.css'

class Card extends Component {
    render() {
        const {id, name, image, email} = this.props.obj;
        return (
            <div className="card-container" key={id}>
                <img 
                    alt={name} 
                    src={image}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}


export default Card;