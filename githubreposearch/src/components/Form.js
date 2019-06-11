import React, {Component} from "react"
import ResultsList from "./ResultsList"
import "../App.css"

class FormContainer extends Component {
  
    state = {
            isLoaded: false, 
            data: [],
            forked: false,
            error: ""
        }
    

    //capturing inputs from form 
    handleSubmit =   (e) => {
        e.preventDefault()
         console.log(this.state)
        this.handleQuery(e)
    }

    handleTextInput  =  (e) => {
         this.setState({text: e.target.value})
        console.log(this.state.text)
    }

    handleStarsInput  =  (e) => {
        if (typeof e.target.value !== Number){
            alert('please enter something better')
            console.log("wring")
        }
         this.setState({stars: e.target.value})
        console.log(this.state.stars)
    }

    toggleFork = (e) => {
        e.preventDefault()
        this.state.forked ? this.setState({forked: false}) : this.setState({forked: true})
        console.log(this.state.forked)
    }

    handleDropDown = (e) => {
        e.preventDefault()
        this.setState({license: e.target.value})
        console.log(this.state.license)
    }

    // querying API .. getting one giant return 

    handleQuery = async () => {
        console.log(this.state)
        const {text, license, forked, stars} = this.state
        if(text && license && forked && stars){
            console.log('waiting')
            await fetch(`https://api.github.com/search/repositories?q=${text}+license:${license}+stars:${stars}+fork:${forked}&sort=stars&order=desc`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    data: data.items
                })
            })
            .catch( (error) => {
                this.setState({error})
                console.log("this is the error", error, "on state too", this.state.error)
                return (
                    <h1>wrong</h1>
                )
            
        })
         
        } else {
            console.log("no")
            alert('please fill all inputs')
        }

        }
 
   

    render(){
        if(this.state.error){
            
            return (
                <div>you're wronge</div>
            )
        }
        else if (this.state.isLoaded) {
            console.log('this happends')
            return (
                <div className="content">
                    <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="column">
                            Text<br></br>
                            <input type="input" placeholder="Text" required onChange={(e) => this.handleTextInput(e)}  /><br></br>
                            License<br></br>
                            <select className="dropdown" name="license" onChange={(e) => this.handleDropDown(e)} >
                                <option value="null"></option> 
                                <option value="MIT">MIT</option>
                                <option value="ISC">ISC</option>
                                <option value="apache-2.0">apache-2.0</option>
                                <option value="gpl">gpl</option>
                            </select>
                        </div>
                        <div className="column">
                            Stars<br></br>
                            <input type="input" placeholder="Stars"  onChange={(e) => this.handleStarsInput(e)} required /> <br></br>
                            <div id="fork">
                            <input id="box"type="checkbox" onClick={(e) => this.toggleFork(e)} checked={false} required/> 
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
            <div className="content">
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
                        <input id="box"type="checkbox" onClick={(e) => this.toggleFork(e)}/> 
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
export default FormContainer

