import React, { Component } from 'react'
import RepoText from './RepoText'
import License from './License';
import RepoStars from './RepoStars'
import "../App.css"


class ResultSingle extends Component{
    render(){
        return (
            <div className="result-container">
                <RepoText />
                <RepoStars />
                <License />
            </div>
        )
    }
    
}

export default ResultSingle