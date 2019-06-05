import React, {Component} from 'react'
import "../App.css"



class Form extends Component {
    render(){
        return(
            <div>
                <form className="form">
                    <div className="column">
                        Text<br></br>
                        <input type="input" placeholder="Text" /><br></br>
                        License<br></br>
                        <select className="dropdown" name="license">
                            <option value="MIT">MIT</option>
                            <option value="Apache">Apache</option>
                            <option value="GLP">GLP</option>
                        </select>
                    </div>
                    <div className="column">
                        Stars<br></br>
                        <input type="input" placeholder="Stars" /> <br></br>
                     <div id="fork">
                        <input id="box"type="checkbox"/> 
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

