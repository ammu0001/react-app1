import React, { Component } from 'react';
import '..//App.css';
class CreateCard extends Component {
    state = {
        input: ""
      };
 handleNewCard = (event) =>{
     event.preventDefault()
     this.props.createNewCard(this.state.input)
 };
 handleInput = (event) => {
        event.persist()
        this.setState({
        input: event.target.value
        })
};
    render() { 
        return ( 
            <form onClick= {this.handleNewCard} className='new-card-form'>
                <h4>CreateCard</h4>
                <input onChange={this.handleInput} className='new-input-card' type='text' value={this.state.input}/>
                <input className='new-input-card' type='submit' value='Create'/>
            </form>

         );
    }
}
 
export default CreateCard;