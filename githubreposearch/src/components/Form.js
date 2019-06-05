import React, {Component} from 'react'
import "../App.css"



class Form extends Component {
    render(){
        return(
            <div>
                <form>
                    <input type="input" placeholder="Text" /><br></br>
                    <input type="input" placeholder="Stars" /> <br></br>
                    <input type="input" placeholder="License" /><br></br>
                    <p>Include Fork:</p>
                    <input type="checkbox"/> <br></br>
                </form>
            </div>
        )
    }
}
export default Form

