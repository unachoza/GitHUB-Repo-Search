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
    // return (
        //             <div className="result-container">
        //                 <h6>single {this.props.firstResponse}</h6>
        //                 <RepoText firstResponse={this.props.firstResponse} />
        //                 <RepoStars />
        //                 <License />
        //             </div>
        //         )
   
}
export default ResultSingle