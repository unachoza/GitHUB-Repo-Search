import React, {Component} from 'react'
// import ResultsList from './ResultsList'
import Search from './Search'
import "../App.css"

class App extends Component {
    render(){
        return(
            <div className="app-container">
                <Search />
            </div>
        )
    }
}

export default App