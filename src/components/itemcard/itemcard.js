import React from 'react';
import eventBus from '../../EventBus/eventbus.js';
import './itemcard.css';

const ItemCard = (props) => {

    const handleBackButton = () => {
        console.log("dispatching cancel display item");
        eventBus.dispatch("cancel display item", {message: "cancel display item"});
    }

    const dispatchModifyItem = () => {
        console.log("dispatching modify item");
        eventBus.dispatch("modify item", {message: "modify item"});
        eventBus.dispatch("cancel display item", {message: "cancel display item"});
    }

    return (
        <div id="displayitem">
            {console.log(props)}
            <h1>Modify <br></br>{props.name}</h1>
                <ol>
                    <li>Quantity: {props.count}</li>
                    <li>Type: {props.type}</li>
                    <li>Expiration date: {props.exdate}</li>
                </ol>
            <p>ID: {props.id}</p>
            <button type="button" onClick={() => handleBackButton()}>{'<'} Back</button>
            <button type="button" onClick={() => dispatchModifyItem()}>Modify</button>
        </div>
    )
}

export default ItemCard;