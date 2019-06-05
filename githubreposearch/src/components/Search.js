import React, {Component}from 'react'
import Header from './Header'
import Form from './Form'
import Footer from './Footer'

class Search extends Component {
    render(){
        return (
            <div className="search-container">
                <Header />
                <h1>GitHub Repo Search</h1>
                <Form />
                <Footer />
            </div>
        )
    }
}
export default Search