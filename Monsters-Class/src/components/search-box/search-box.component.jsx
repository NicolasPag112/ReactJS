import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {

    render() {
        const {boxClassName, placeHolderText, onChangeHandler} = this.props;
        return (
                <input
                    className={`search-box ${boxClassName}`} 
                    type='search' 
                    placeholder={placeHolderText} 
                    onChange={onChangeHandler} 
                />
        )
    }
}



export default SearchBox;