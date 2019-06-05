import React, {Component}from 'react'
import Header from './Header'
import Form from './Form'
import Footer from './Footer'
import ResultsList from '../ResultsComponents/ResultsList';

class Search extends Component {
    render(){
        return (
            <div className="search-container">
                <Header />
                <h1>GitHub Repo Search</h1>
                <Form />
                <hr/>
                <p>Please enter query and click SEARCH button above, results appear here</p>
                <ResultsList />
                <Footer />
                
            </div>
        )
    }
}
export default Search