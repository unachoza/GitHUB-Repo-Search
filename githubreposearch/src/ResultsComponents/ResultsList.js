import React, {Component} from 'react'
import ResultSingle from './ResultSingle'
import "../App.css"


class ResultsList extends Component{
    render(){
        // if !this.
        return (
            <div className="list-container">
                <h4>SEARCH results</h4>
                <h4>made it here with {this.props.firstResponse}</h4>
                <ResultSingle firstResponse={this.props.firstResponse}/>
                <ResultSingle />
                <ResultSingle />
                <ResultSingle />
            </div>
        )
    }
}

export default ResultsList