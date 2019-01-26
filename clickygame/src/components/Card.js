import React from "react"
import "../styles/Card.css"

function Card(props) {

    return (
        <div className="card " id={props.id} onClick={() => props.handleClick(props.id)}>
            <img className="card-img"
                alt={props.name}
                src={props.image}
                height="200px"
                width="200px"
            />
        </div>

    );
}

export default Card;