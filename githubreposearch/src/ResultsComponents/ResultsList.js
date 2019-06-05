import React, {Component} from 'react'
import ResultSingle from './ResultSingle'
import "../App.css"


class ResultsList extends Component{
    render(){
        return (
            <div className="list-container">
                <h4>SEARCH results</h4>
                <ResultSingle />
                <ResultSingle />
                <ResultSingle />
                <ResultSingle />
            </div>
        )
    }
}

export default ResultsList