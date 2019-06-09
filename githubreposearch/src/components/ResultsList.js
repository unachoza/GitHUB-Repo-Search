import React from 'react'
import {Link} from 'react-router-dom'
import ResultSingle from './ResultSingle'
import "./Results.css"
import "../App.css"


const ResultsList = ({dataArrObj}) => {
// console.log(dataArrObj.length)
    const repoInfo = dataArrObj.map((item , i)=> (
        <div className="result-container">
            <div className="text">
                <h2 className="repo-text" key={i}> {item.name} Author: {item.owner.login}</h2>
                <p className="repo-description">{item.description}</p>
                {/* <Link to="{item.url}">link to Github</Link> */}
                <a target="_blank" href="{item.url}">See on Github</a>
            </div>
            <div className="fork" id="fork-button">forked</div>
            <div className="star">
                <h6 className="text-title">Stars:</h6>
                <p className="text-answer">{item.stargazers_count}</p>
            </div>
            <div className="license">
                <h6 className="text-title">License:</h6>
                <p className="text-answer">{item.license.name}</p>
            </div>
        </div>
    ))
    return (
         <div>
             {repoInfo}
         </div> )
    }

   export default ResultsList