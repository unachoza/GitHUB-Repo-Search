import React, {Component} from 'react'
import ResultsList from "./ResultsList"
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
        console.log('waiting')
        await fetch(`https://api.github.com/search/repositories?q=${this.state.text}&sort=stars&order=desc`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                data: json.items
            })
        })
        console.log(this.state.isLoaded, this.state.data[0])
        this.queryArry(e)
    }

    queryArry =  (e) => {
        e.preventDefault()
        console.log('jhe')
        let arr = []
       if (this.state.isLoaded){
        this.state.data.map(item => {
            arr.push(item)
        })
       } 
       console.log(arr, arr.length)
       let newArr = []

       for (let i = 0; i< arr.length; i++){
        newArr.push(arr[i].name)
       }
       console.log(newArr)
       let user = arr.map( arr.name, i => ( newArr.push(i)))
       console.log(user)
       this.setState({data: arr}) 
       console.log(this.state.data)
       return <ResultsList data={this.state.data}/>
    }

    render(){
        if  (this.state.isLoaded) {
            // let responses = this.state.data
                let firstResponse = this.state.data[0].name
                console.log("firstResponse", firstResponse, this.state.isLoaded)
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
                        {/* <ResultsList  responses={this.state.data}/> */}
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

