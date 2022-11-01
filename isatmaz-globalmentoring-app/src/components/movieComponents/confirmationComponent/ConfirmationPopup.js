import React from 'react';

import './ConfirmationPopup.css';
import { BsCheckCircleFill } from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';

class ConfirmationPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('movie was removed from the list: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className='confirmation-form' onSubmit={this.handleSubmit}>        
        <div className='confirmation-form-div'>
          <AiOutlineClose className='confirmation-form-close' onClick={()=>{this.popup.destroy()}}/>
          <BsCheckCircleFill fill='#F65261' stroke='#F65261' className='confirmation-form-logo'/>
          <p className='confirmation-form-header'> CONGRATULATIONS !</p>
          <p className='confirmation-text'>
            The movie has been added to database successfully
          </p>      
        </div>        
       
      </form>
    );
  }
}

export default ConfirmationPopup