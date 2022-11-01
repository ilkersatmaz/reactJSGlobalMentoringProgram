import React from 'react';

import './DeleteMovie.css';

class DeleteMovie extends React.Component {
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
    const  {movieData} = this.props;
    return (
      <form className='delete-form' onSubmit={this.handleSubmit}>
        <p className='delete-form-header'> DELETE MOVIE</p>
        <div className='delete-form-div'>
          <p className='confirmation-text'>
            Are you sure you want to delete this movie?
          </p>
          <button className='confirm-button' type="confirm" value="CONFIRM">CONFIRM</button>         
        </div>        
       
      </form>
    );
  }
}

export default DeleteMovie