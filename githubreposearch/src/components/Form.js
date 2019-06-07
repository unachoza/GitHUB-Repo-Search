import React, {Component} from 'react'
import ResultList from "../ResultsComponents/ResultsList"
import "../App.css"



class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: "", 
            stars: "",
            license: "",
            forked: false, 
            isLoaded: false, 
            data: []
        }
    }

    //capturing form data
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

    // querying API

    handleQuery = async (e) => {
        await fetch(`https://api.github.com/search/repositories?q=${this.state.text}&sort=stars&order=desc`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                isLoaded: true,
                data: res.items[0].name
            })
        })
        console.log(this.state.isLoaded, this.state.data)
    }


    render(){
        if  (this.state.isLoaded) {
                let firstResponse = this.state.data
                return (
                    <div>
                        <ResultList firstResponse ={this.firstResponse} />
                        <h1>{firstResponse}</h1>
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
                            <option value="Apache">Apache</option>
                            <option value="GLP">GLP</option>
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
                
            </div>
        )
    }
}
export default Form

