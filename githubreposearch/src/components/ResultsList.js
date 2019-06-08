import React from 'react'
import ResultSingle from './ResultSingle'
import "../App.css"


const ResultsList = ({repoNameArr,repoOwnerArr,urlArr,descArr,starsArr,licenseArr,forkedArr}) => {
    
    const rName = repoNameArr.map((repo, i)  => ( 
        <div className="text">
            <h2 className="repo-text" key={i}>{repo}</h2>
            <p className="repo-description">repo description</p>
        </div>
            )
        )
    const rStar = starsArr.map((star, i)  => ( 
        <div className="star">
            <p className="text-answer" key={i}>{star}</p>
            <h6 className="text-title">Stars:</h6>
        </div>
            )
        )
        // const rOwner = repoOwnerArr.map((repo, i)  => ( 
        //     <div className="text">
        //         <h2 className="repo-text" key={i}>{repo}</h2>
        //         <p className="repo-description">repo description</p>
        //     </div>
        //         )
        //     )
            // const rUrl = urlArr.map((repo, i)  => ( 
            //     <div className="text">
            //         <h2 className="repo-text" key={i}>{repo}</h2>
            //         <p className="repo-description">repo description</p>
            //     </div>
            //         )
            //     )
            //     const rDesc = descArr.map((repo, i)  => ( 
            //         <div className="text">
            //             <h2 className="repo-text" key={i}>{repo}</h2>
            //             <p className="repo-description">repo description</p>
            //         </div>
            //             )
            //         )
               
                        // const rlicense = licenseArr.map((repo, i)  => ( 
                        //     <div className="text">
                        //         <h2 className="repo-text" key={i}>{repo}</h2>
                        //         <p className="repo-description">repo description</p>
                        //     </div>
                        //         )
                        //     )
                        //     const rfork = forkedArr.map((repo, i)  => ( 
                        //         <div className="text">
                        //             <h2 className="repo-text" key={i}>{repo}</h2>
                        //             <p className="repo-description">repo description</p>
                        //         </div>
                        //             )
                        //         )
    return (
         <div>
             {rName} {rStar}
         </div> )
    }

   export default ResultsList