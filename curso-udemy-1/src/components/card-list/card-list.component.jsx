import { Component } from "react";

class CardList extends Component {
    render() {
        const {list} = this.props
        if (!list.length) return <div>No monsters found</div>;

        return (
            <div>
                {list.map((obj) => {
                    return (
                        <div key={obj.id}>
                            <h1>{obj.name}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default CardList;