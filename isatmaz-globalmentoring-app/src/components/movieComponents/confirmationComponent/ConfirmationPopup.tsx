import React from 'react';

import './ConfirmationPopup.css';
import { BsCheckCircleFill } from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';

function ConfirmationPopup (){

  const handleSubmit = (event: any) => {
    event.preventDefault();
  }
  return (
    <form className='confirmation-form' onSubmit={handleSubmit}>        
      <div className='confirmation-form-div'>
        <AiOutlineClose className='confirmation-form-close' onClick={()=>{}}/>
        <BsCheckCircleFill fill='#F65261' stroke='#F65261' className='confirmation-form-logo'/>
        <p className='confirmation-form-header'> CONGRATULATIONS !</p>
        <p className='confirmation-text'>
          The movie has been added to database successfully
        </p>      
      </div>        

    </form>
  );
}

export default ConfirmationPopup