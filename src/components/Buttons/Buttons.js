import React, {Component} from 'react';
import './Buttons.css'

class Buttons extends Component {
    constructor(){
        super()
        this.state ={}
    }
    render(){
        return(
            <section>
                <div id='button-row'>
                    <button onClick={this.props.clickPrev}>Previous</button>
                    <section>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>New</button>
                    </section>
                    <button onClick={this.props.clickNext}>Next</button>
                </div>
            </section>
        )

    }
}


export default Buttons;