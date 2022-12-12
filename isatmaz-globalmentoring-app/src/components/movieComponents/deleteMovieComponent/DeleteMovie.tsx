import React from 'react';
import { useAppDispatch } from '../../../hooks';
import { deleteSelectedMovie } from '../../../store/movies/movieOperationSlice';
import './DeleteMovie.css';

function DeleteMovie (props:any) {
  const {setIsConfirmationOpen, movieId} = props;
  const dispatch = useAppDispatch();
  
  
  const handleSubmit = (event: any) => {
    dispatch(deleteSelectedMovie(movieId));
    setIsConfirmationOpen(false);
  }
  return (
    <form className='delete-form' onSubmit={handleSubmit}>
      <p className='delete-form-header'> DELETE MOVIE</p>
      <div className='delete-form-div'>
        <p className='confirmation-text'>
          Are you sure you want to delete this movie?
        </p>
        <button className='confirm-button'>CONFIRM</button>               
      </div>        

    </form>
  );
}

export default DeleteMovie