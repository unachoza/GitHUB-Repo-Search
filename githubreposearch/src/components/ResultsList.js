import React from "react"
import "./Results.css"
import "../App.css"


const ResultsList = ({dataArrObj}) => {

    const repoInfo = dataArrObj.map((item , i)=> {
            const {name, owner, description, html_url, stargazers_count, license, fork } = item
            
            //function to change css .fork-button to visible:hidden depending on this.state.forked
            
            if (fork){

            }
            return (
                
                <div className="result-container">
                    <div className="results-sub-container" id="text">
                            <h2 className="repo-text" key={i}> {name} Author: {owner.login}</h2>
                            <p className="repo-description">{description}</p>
                            <a  href={html_url}>See on Github</a>
                            <div id="fork" id="fork-button">forked</div>
                    </div>
                    <div className="results-sub-container" id="star">
                        <h6 className="text-title">Stars:</h6>
                        <p className="text-answer">{stargazers_count}</p>
                    </div>
                    <div className="results-sub-container" id="license">
                        <h6 className="text-title">License:</h6>
                        <p className="text-answer">{license.name}</p>
                    </div>
                </div>
            )
        }
    )

    return (
         <div>
             {repoInfo}
         </div> )
    }

export default ResultsList
   