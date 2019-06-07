import React, {Component} from 'react'
import ResultSingle from './ResultSingle'
import "../App.css"


const ResultsList = ({responses}) => {
    const results = responses.map((items, i ) => {
        return (
            <ResultSingle 
            key={i}
            repoName={items[i].name}
            repoOwner={items[i].owner.login}
            url={items[i].owner.url}
            description ={items[i].description}
            stars={items[i].stargazer_count}
            license={items[i].license}
            forked={items[i].forks}
            /> 
        )
    })

    return (
        {results}
    )
}

// class ResultsList extends Component{
    
//     render(){
//         // if !this.
//         return (
//             <div className="list-container">
//                 <h4>SEARCH results</h4>
//                 <h4>made it here with {this.props.firstResponse}</h4>
//                 <ResultSingle firstResponse={this.props.firstResponse}/>
//                 <ResultSingle />
//                 <ResultSingle />
//                 <ResultSingle />
//             </div>
//         )
//     }
// }

  export default ResultsList