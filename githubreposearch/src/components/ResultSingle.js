import React from 'react'
// import RepoText from './RepoText'
// import License from './License';
// import RepoStars from './RepoStars'
import "../App.css"


const ResultSingle = (repo, key) => {
     console.log(repo)
    return (
        <div className="text">
        <h2 className="repo-text">{repo}</h2>
        <p className="repo-description">repo description</p>
    </div>
    )
   
}
export default ResultSingle