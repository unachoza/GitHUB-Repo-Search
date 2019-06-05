import React, {Component} from 'react'
import ResultsList from '../ResultsComponents/ResultsList'
import Search from './Search'
import "../App.css"

class App extends Component {
    constructor(){
        super()
        this.state ={ 
            showResults: false
        }
    }
    renderResult(){
        return this.state.showResults? <ResultsList /> : ""
         }
    render(){
    
        return(
            <div className="app-container">
                <Search />
                {this.renderResult()}
            </div>
        )
    }
}

export default App