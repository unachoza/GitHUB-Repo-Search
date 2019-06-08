import React from 'react'
// import RepoText from './RepoText'
// import License from './License';
// import RepoStars from './RepoStars'
import "../App.css"


const ResultSingle = (props) => {
    const {repoName} = props
    
    // const {repoName, repoOwner, url, description, stars, license, forked} = this.responses
    return (
        <div>
            
            <h1>am I {repoName}</h1>
        </div>
    )
   
}
 
// class ResultSingle extends Component{
//     render(){
//         return (
//             <div className="result-container">
//                 <h6>single {this.props.firstResponse}</h6>
//                 <RepoText firstResponse={this.props.firstResponse} />
//                 <RepoStars />
//                 <License />
//             </div>
//         )
//     }
    
// }

export default ResultSingle