import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import DatePicker from "react-datepicker";
import { MultiSelect } from "react-multi-select-component";
import "react-datepicker/dist/react-datepicker.css";
import ConfirmationPopup from '../confirmationComponent/ConfirmationPopup';
import {AiOutlineClose} from 'react-icons/ai';
import './UpsertMovie.css';

const genreOptions = [
  { label: "Action", value: "Action" },
  { label: "Comedy", value: "Comedy" },
  { label: "Horor", value: "Horor"},
  { label: "Drama", value: "Drama"},
  { label: "Adventure", value: "Adventure"},
  
];

const initialMovieData = {
  "title":"",
  "description":"",
  "imageUrl":"",
  "releaseDate": "",
  "url":"",
  "rating":"",
  "genre": [],
  "runTime": ""
}

function UpsertMovie (props) {
  const {setIsUpsertOpen} = props;
  const [movieData, setMovieData] = useState(props.movieData ? props.movieData : initialMovieData);
  const [selectedGenre, setSelectedGenre] = useState(props.movieData ? mapSelectedGenre(props.movieData.genre) : []);
  const [resetTriggered, setResetTriggered] = useState(false);
  useEffect(()=>{
    if(resetTriggered){
      setMovieData(props.movieData ? props.movieData : initialMovieData);
      setResetTriggered(false);
    }
  }, [resetTriggered])

  function mapSelectedGenre(selectedList){
    let multiSelectList = [];
    selectedList.map((genre)=>{
      multiSelectList.push({label : genre, value: genre});
    })
    return multiSelectList;
  }

  function getDate(releaseDate){
    if(releaseDate){
        const date=new Date(releaseDate)
        return date;
    }
    return "";
  }

 function handleChange(event) {
    setMovieData({                   
      ...movieData,    
      [event.target.name] : event.target.value       
    })
  }

 function handleSubmit(event) { 
    event.preventDefault();
  } 
  return (
    <form className='upsert-form' onSubmit={handleSubmit}>        
      <p className='upsert-form-header'> {movieData ? "EDIT" : "ADD"} YOUR MOVIE</p>
      <div className='upsert-form-div'>
        <AiOutlineClose className='upsert-form-close' onClick={()=>setIsUpsertOpen(false)}/>
        <label className='upsert-form-item-title'>
          TITLE
          <br />
          <input name="title" placeholder='title' className='upsert-form-item-input' value={movieData?.title} 
          onChange={handleChange}/>
        </label>
        <label className='upsert-form-item-title'>
          RELEASE DATE
          <br />
          <DatePicker placeholder="Select Date" className='upsert-form-item-datepicker' 
          selected={getDate(movieData?.releaseDate)} 
            onChange={(date) => {
              setMovieData({                   
                ...movieData,    
                releaseDate: date       
            })
            }}/>
        </label>
        <label className='upsert-form-item-title'>
          MOVIE URL
          <br />
          <input name="url" placeholder='https://' className='upsert-form-item-input' value={movieData?.url} 
          onChange={handleChange}/>
        </label>
        <label className='upsert-form-item-title'>
          RATING
          <br />
          <input name='rating' placeholder='7.8' className='upsert-form-item-input' value={movieData?.rating} 
          onChange={handleChange}/>
        </label>
        <label className='upsert-form-item-title'>
          GENRE
          <br />
          <MultiSelect
            className='upsert-form-item-multi-select' 
            options={genreOptions}
            value={selectedGenre}              
            label="Select Genre"
            disableSearch={true}
            hasSelectAll={false}
            onChange={(event)=>{setSelectedGenre(event)}}
          />
        </label>
        <label className='upsert-form-item-title'>
          RUNTIME
          <br />
          <input name="runTime" placeholder='minutes' className='upsert-form-item-input' value={movieData?.runTime}  
          onChange={handleChange}/>
        </label>
        <label className='upsert-form-item-overview'>
          OVERVIEW
          <br />
          <textarea name="description" placeholder='Movie Description' className='upsert-form-item-textarea' value={movieData?.description}  
          onChange={handleChange}/>
        </label>
        <div className='upsert-from-button-div'>
            <button className='reset-button' onClick={()=>{setResetTriggered(true)}}>Reset</button>
            <Popup className="confirmation-popup" trigger={<button className='submit-button'>Submit</button>} position="bottom left" arrow={false}>
              <ConfirmationPopup />
            </Popup>             
        </div>
        
      </div>        
      
    </form>
  );
}

export default UpsertMovie