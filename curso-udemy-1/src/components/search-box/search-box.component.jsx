import { Component } from "react";

class SearchBox extends Component {

    render() {
        const {boxClassName, placeHolderText, onChangeHandler} = this.props;
        return (
                <input
                    className={boxClassName} 
                    type='search' 
                    placeholder={placeHolderText} 
                    onChange={onChangeHandler} 
                />
        )
    }
}



export default SearchBox;