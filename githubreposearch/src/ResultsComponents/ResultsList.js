import React, {Component} from 'react'
import ResultSingle from './ResultSingle'

class ResultsList extends Component{
    render(){
        return (
            <div>
                <h4>Look at all these results</h4>
                <ResultSingle />
                <ResultSingle />
                <ResultSingle />
                <ResultSingle />
            </div>
        )
    }
}

export default ResultsList