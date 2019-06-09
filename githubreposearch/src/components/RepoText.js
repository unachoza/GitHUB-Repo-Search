import React from 'react'
import "../App.css"


const RepoText = () => {
    return (
        <div className="text">
            <h2 className="repo-text">RepositoryName and Owner</h2>
            <p className="repo-description">repo description</p>
            <a href="url">link to Github</a>
        </div>
    )
}

export default RepoText