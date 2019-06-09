import React from 'react'
import ResultSingle from './ResultSingle'
import "../App.css"


const ResultsList = ({repoNameArr,repoOwnerArr,urlArr,descArr,starsArr,licenseArr,forkedArr, dataArrObj}) => {
    // console.log("name is",repoNameArr, "owner is", repoOwnerArr)
    console.log(dataArrObj)

    const repoInfo = dataArrObj.map((item , i)=> (
        <div className="result-container">
            <div className="text">
                <h2 className="repo-text" key={i}>{item.name}</h2>
                <p className="repo-description">{item.description}</p>
            </div>
            <div className="star">
                <h6 className="text-title">Stars:</h6>
                <p className="text-answer">{item.stargazers_count}</p>
            </div>
            <div className="license">
            <h6 className="text-title">License:</h6>
            <p className="text-answer">{item.language}</p>
        </div>
        </div>
    ))







    const rName = repoNameArr.map((repo, i)  => ( 
        <div className="text">
            <h2 className="repo-text" key={i}>{repo}</h2>
            <p className="repo-description">repo description</p>
        </div>
            )
        )
    const rOwner = repoOwnerArr.map((owner, i)  => {
        //  console.log(owner)
        return ( 
       
        <div className="star">
            <p className="text-answer" key={i}>{owner}</p>
            <h6 className="text-title">Stars:</h6>
        </div>
            )}
        )
        // const rStars = starsArr.map((star, i)  => ( 
        //     <div className="text">
        //         <h2 className="repo-text" key={i}>{star}</h2>
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
             {repoInfo}
         </div> )
    }

   export default ResultsList