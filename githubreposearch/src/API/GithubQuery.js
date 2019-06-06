import React, {Component} from 'react'
import axios from 'axios'

class GithubQuery extends Component {

    

    handleSearch = (props) => {
        fetch(`https://api.github.com/search/repositories?q=${this.props.text}+language:assembly&sort=stars&order=desc`)
        .then(result => result.json())
    }
    render(){
        return (
            <div>GithubQuery</div>
        )
    }
}

export default GithubQuery