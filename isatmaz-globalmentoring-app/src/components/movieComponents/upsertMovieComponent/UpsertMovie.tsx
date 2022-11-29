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
  "title": "",
  "tagline": "",
  "vote_average": 0,
  "vote_count": 0,
  "release_date": "",
  "poster_path": "",
  "overview": "",
  "budget": 0,
  "revenue": 0,
  "runtime": "",
  "genres": []
}

function UpsertMovie (props : any) {
  const {setIsUpsertOpen} = props;
  const [movieData, setMovieData] = useState(props.movieData ? props.movieData : initialMovieData);
  const [selectedGenre, setSelectedGenre] = useState(props.movieData ? mapSelectedGenre(props.movieData.genres) : []);
  const [resetTriggered, setResetTriggered] = useState(false);
  useEffect(()=>{
    if(resetTriggered){
      setMovieData(props.movieData ? props.movieData : initialMovieData);
      setResetTriggered(false);
    }
  }, [resetTriggered])

  function mapSelectedGenre(selectedList: any){
    let multiSelectList = [] as any;
    selectedList.map((genre : string)=>{
      multiSelectList.push({label : genre, value: genre});
    })
    return multiSelectList;
  }

  function getDate(releaseDate:  string){
    if(releaseDate){
        const date=new Date(releaseDate)
        return date;
    }
    return null;
  }

 function handleChange(event : any) {
    setMovieData({                   
      ...movieData,    
      [event.target.name] : event.target.value       
    })
  }

 function handleSubmit(event: any) { 
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
          <DatePicker placeholderText="Select Date" className='upsert-form-item-datepicker' 
          selected={getDate(movieData?.release_date)} 
            onChange={(date: any) => {
              setMovieData({                   
                ...movieData,    
                release_date: date       
            })
            }}/>
        </label>
        <label className='upsert-form-item-title'>
          MOVIE URL
          <br />
          <input name="url" placeholder='https://' className='upsert-form-item-input' value={movieData?.poster_path} 
          onChange={handleChange}/>
        </label>
        <label className='upsert-form-item-title'>
          RATING
          <br />
          <input name='rating' placeholder='7.8' className='upsert-form-item-input' value={movieData?.vote_average} 
          onChange={handleChange}/>
        </label>
        <label className='upsert-form-item-title'>
          GENRE
          <br />
          <MultiSelect
            className='upsert-form-item-multi-select' 
            options={genreOptions}
            value={selectedGenre}              
            labelledBy="Select Genre"            
            disableSearch={true}
            hasSelectAll={false}
            onChange={(event: any)=>{setSelectedGenre(event)}}
          />
        </label>
        <label className='upsert-form-item-title'>
          RUNTIME
          <br />
          <input name="runTime" placeholder='minutes' className='upsert-form-item-input' value={movieData?.runtime}  
          onChange={handleChange}/>
        </label>
        <label className='upsert-form-item-overview'>
          OVERVIEW
          <br />
          <textarea name="description" placeholder='Movie Description' className='upsert-form-item-textarea' value={movieData?.overview}  
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