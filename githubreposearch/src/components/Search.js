import React from "react"
import Header from "./Header"
import Form from "./Form"
import Footer from "./Footer"
import "../App.css"

const Search = () => (
            <div className="search-container">
                <Header />
                <h1 className="title">EVEN FINANCIAL GitHub Repo Search</h1>
                <Form />
                <Footer />
            </div>
        )
    
export default Search
