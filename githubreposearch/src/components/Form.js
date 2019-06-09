import React, {Component} from 'react'
import ResultsList from "./ResultsList"
import "../App.css"

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            repoNameArr :[],
            repoOwnerArr :[],
            urlArr :[],
            descArr :[],
            starsArr :[],
            licenseArr :[],
            forkedArr: [],
            isLoaded: false, 
            // data: []
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
        await fetch(`https://api.github.com/search/repositories?q=${this.state.text}&sort=stars&order=desc`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                data: json.items
            })
        })
        this.queryArry(e)
        console.log("went")
    }

    // pulls out data I want and parses into arrays and sets State accourdingly
    queryArry =  () => {
        console.log('first')
        let arr = []
        if (this.state.isLoaded){
            this.state.data.map(item => {
                return arr.push(item)
            })
            console.log(this.state.data)
       } 

        /* **********************************  starting from here 
        ************************************* Loop this eventually*/
        let repoNameArr = []
        let repoOwnerArr = []
        let urlArr = []
        let descArr = []
        let starsArr = []
        let licenseArr = []
        let forkedArr = []

        for (let i = 0; i< arr.length; i++){
        repoNameArr.push(arr[i].name)
        }
        for (let i = 0; i< arr.length; i++){
        repoOwnerArr.push(arr[i].owner.login)
        }
        for (let i = 0; i< arr.length; i++){
        urlArr.push(arr[i].owner.url)
        }
        for (let i = 0; i< arr.length; i++){
        descArr.push(arr[i].description)
        }
        for (let i = 0; i< arr.length; i++){
        starsArr.push(arr[i].stargazer_count)
        }
        for (let i = 0; i< arr.length; i++){
        licenseArr.push(arr[i].license)
        }
        for (let i = 0; i< arr.length; i++){
        forkedArr.push(arr[i].forks)
        }
        this.setState({
            repoNameArr,
            repoOwnerArr,
            urlArr,
            descArr,
            starsArr,
            licenseArr,
            forkedArr
        })

       this.setState({data: arr}) 
       console.log(this.state)
    //    return <ResultsList data={this.state}/>
    }


    render(){
        if  (this.state.isLoaded) {
            // let responses = this.state.data
            let firstResponse = this.state.data[0].name
            // console.log("firstResponse", firstResponse, this.state.isLoaded)
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
                    <ResultsList  
                    dataArrObj={this.state.data}
                    repoNameArr={this.state.repoNameArr}
                    repoOwnerArr={this.state.repoOwnerArr}
                    urlArr={this.state.urlArr}
                    descArr={this.state.descArr}
                    starsArr={this.state.starsArr}
                    licenseArr={this.state.licenseArr}
                    forkedArr={this.state.licenseArr}
                    /> 
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

