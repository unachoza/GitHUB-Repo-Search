import React, {Component} from 'react'
import ResultsList from '../ResultsComponents/ResultsList'
import Search from './Search'
import "../App.css"

class App extends Component {
    render(){
        return(
            <div className="app-container">
                <h1>This is where user will search and find</h1>
                <Search />
                <ResultsList />
                
            </div>
        )
    }
}

export default App