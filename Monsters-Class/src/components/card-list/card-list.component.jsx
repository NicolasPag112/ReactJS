import { Component } from "react";
import './card-list.styles.css';

import Card from "../card/card.component";

class CardList extends Component {
    render() {
        const {list} = this.props
        if (!list.length) return <div>No monsters found</div>;

        return (
            <div className="card-list">
                {list.map((obj) => {
                    return(
                        <Card obj={obj} />
                    )
                })}
            </div>
        )
    }
}


export default CardList;