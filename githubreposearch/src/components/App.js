import React, {Component} from 'react'
import Form from './Form'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
    render(){
        return(
            <div>
                <Header />
                <h1>This is where user will search and find</h1>
                <Form/>
                <Footer />
            </div>
        )
    }
}

export default App