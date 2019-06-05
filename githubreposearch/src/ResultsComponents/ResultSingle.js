import React, { Component } from 'react'
import RepoText from './RepoText'
import License from './License';
import RepoStars from './RepoStars'

class ResultSingle extends Component{
    render(){
        return (
            <div className="result-container">
                <p>I'm a result!</p>
                <RepoText />
                <RepoStars />
                <License />
            </div>
        )
    }
    
}

export default ResultSingle