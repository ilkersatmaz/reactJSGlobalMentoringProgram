import React from 'react';
import Popup from 'reactjs-popup';
import './DeleteMovie.css';
import ConfirmationPopup from '../confirmationComponent/ConfirmationPopup';

function DeleteMovie () {

  const handleSubmit = (event: any) => {
    alert('movie was removed from the list: ');
    event.preventDefault();
  }
  return (
    <form className='delete-form' onSubmit={handleSubmit}>
      <p className='delete-form-header'> DELETE MOVIE</p>
      <div className='delete-form-div'>
        <p className='confirmation-text'>
          Are you sure you want to delete this movie?
        </p>
        <Popup className="confirmation-popup" trigger={<button className='confirm-button'>CONFIRM</button>} position="bottom left" arrow={false}>
            <ConfirmationPopup />
        </Popup>                  
      </div>        

    </form>
  );
}

export default DeleteMovie