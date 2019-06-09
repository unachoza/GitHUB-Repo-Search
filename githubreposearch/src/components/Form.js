import React, {Component} from 'react'
import ResultsList from "./ResultsList"
import "../App.css"

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoaded: false, 
            data: []
        }
    }

    //capturing inputs from form 
    handleSubmit =  async (e) => {
        e.preventDefault()
        await console.log(this.state)
        this.handleQuery(e)
    }

    handleTextInput  = async (e) => {
        await this.setState({text: e.target.value})
        console.log(this.state.text)
    }

    handleStarsInput  = async (e) => {
        await this.setState({stars: e.target.value})
        console.log(this.state.stars)
    }

    forkToggleClick = (e) => {
        e.preventDefault()
        this.state.forked ? this.setState({forked: false}) : this.setState({forked: true})
        !this.state.forked ? this.setState({forked: true}) : this.setState({forked: false}) 
        console.log(this.state.forked)
    }

    handleDropDown = (e) => {
        e.preventDefault()
        this.setState({license: e.target.value})
        console.log(this.state.license)
    }

    // querying API .. getting one giant return 

    handleQuery = async (e) => {
        console.log('waiting')
        await fetch(`https://api.github.com/search/repositories?q=${this.state.text}+license:${this.state.license}+stars:${this.state.stars}+fork:${this.state.forked}&sort=stars&order=desc`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                data: json.items
            })
        })
        this.queryArry(e)
    }

    // pulls out data I want and parses into arrays and sets State accourdingly
    queryArry =  () => {
        let arr = []
        if (this.state.isLoaded){
            this.state.data.map(item => {
                return arr.push(item)
            })
       } 
       console.log(this.state.forked)
    }

    render(){
        if  (this.state.isLoaded) {
            
            return (
                <div>
                    <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="column">
                            Text<br></br>
                            <input type="input" placeholder="Text" onChange={(e) => this.handleTextInput(e)}/><br></br>
                            License<br></br>
                            <select className="dropdown" name="license" onChange={(e) => this.handleDropDown(e)}>
                                <option value="null"></option> 
                                <option value="MIT">MIT</option>
                                <option value="ISC">ISC</option>
                                <option value="apache-2.0">apache-2.0</option>
                                <option value="gpl">gpl</option>
                            </select>
                        </div>
                        <div className="column">
                            Stars<br></br>
                            <input type="input" placeholder="Stars"  onChange={(e) => this.handleStarsInput(e)} /> <br></br>
                            <div id="fork">
                            <input id="box"type="checkbox" onClick={(e) => this.forkToggleClick(e)}/> 
                            <p id="checkbox-title">Include Forked</p>
                            </div>
                        </div>
                        <input  id="submit" type="submit" value="Search" />
                    </form>
                    <hr/>
                    <p className="results-below-text">SEARCH Results</p>
                    <ResultsList  
                    dataArrObj={this.state.data}
                    /> 
                </div>
            )
        }
            
        return(
            <div>
                <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="column">
                        Text<br></br>
                        <input type="input" placeholder="Text" onChange={(e) => this.handleTextInput(e)}/><br></br>
                        License<br></br>
                        <select className="dropdown" name="license" onChange={(e) => this.handleDropDown(e)}>
                            <option value="null"></option> 
                            <option value="MIT">MIT</option>
                            <option value="ISC">ISC</option>
                            <option value="apache-2.0">apache-2.0</option>
                            <option value="gpl">gpl</option>
                        </select>
                    </div>
                    <div className="column">
                        Stars<br></br>
                        <input type="input" placeholder="Stars"  onChange={(e) => this.handleStarsInput(e)} /> <br></br>
                     <div id="fork">
                        <input id="box"type="checkbox" onClick={(e) => this.forkToggleClick(e)}/> 
                        <p id="checkbox-title">Include Forked</p>
                     </div>
                    </div>
                    <input  id="submit" type="submit" value="Search" />
                </form>
                <hr/>
                <p className="results-below-text">Please enter query and click SEARCH button above, results appear here</p>
            </div>
        )
    }
}
export default Form

