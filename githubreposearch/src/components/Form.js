import React, {Component} from 'React'

class Form extends Component {
    render(){
        return(
            <div>
                <form>
                <input>Text</input>
                <input>Stars</input>
                <input>License</input>
                <input type="checkbox">Include Forked</input>
                </form>
            </div>
        )
    }
}
export default Form

