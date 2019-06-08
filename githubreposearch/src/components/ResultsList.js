import React from 'react'
// import ResultSingle from './ResultSingle'
import "../App.css"


const ResultsList = ({repoNameArr,repoOwnerArr,urlArr,descArr,starsArr,licenseArr,forkedArr}) => {
    return (
        <div>
            {repoNameArr.map((repo) => ( <div>{repo}</div>))}
        
        </div> 
           
       
        )
    
    
}
   export default ResultsList