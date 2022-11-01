import React from 'react';
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

class UpsertMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: props.movieData,
      selectedGenre: props.movieData ? this.mapSelectedGenre(props.movieData.genre) : []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  mapSelectedGenre(selectedList){
    let multiSelectList = [];
    selectedList.map((genre)=>{
      multiSelectList.push({label : genre, value: genre});
    })
    return multiSelectList;
  }

  getDate(releaseDate){
    if(releaseDate){
        const date=new Date(releaseDate)
        return date;
    }
    return "";
}

  handleChange(event) {
    this.setState(prevState => ({
      movieData: {                   
          ...prevState.movieData,    
          [event.target.name] : event.target.value       
      }
    }))
  }

  handleSubmit(event) {    
    event.preventDefault();
  }

  render() {    
    //this.setState({movieData : movieData});
    return (
      <form className='upsert-form' onSubmit={this.handleSubmit}>        
        <p className='upsert-form-header'> {this.state.movieData ? "EDIT" : "ADD"} YOUR MOVIE</p>
        <div className='upsert-form-div'>
          <AiOutlineClose className='upsert-form-close'/>
          <label className='upsert-form-item-title'>
            TITLE
            <br />
            <input name="title" placeholder='title' className='upsert-form-item-input' value={this.state.movieData?.title} 
            onChange={this.handleChange}/>
          </label>
          <label className='upsert-form-item-title'>
            RELEASE DATE
            <br />
            <DatePicker placeholder="Select Date" className='upsert-form-item-datepicker' 
            selected={this.getDate(this.state.movieData?.releaseDate)} 
              onChange={(date) => {this.setState(prevState => ({
                                    movieData: {                   
                                        ...prevState.movieData,    
                                        releaseDate: date       
                                    }
                                  }))}} 
                                />
          </label>
          <label className='upsert-form-item-title'>
            MOVIE URL
            <br />
            <input name="url" placeholder='https://' className='upsert-form-item-input' value={this.state.movieData?.url} 
            onChange={this.handleChange}/>
          </label>
          <label className='upsert-form-item-title'>
            RATING
            <br />
            <input name='rating' placeholder='7.8' className='upsert-form-item-input' value={this.state.movieData?.rating} 
            onChange={this.handleChange}/>
          </label>
          <label className='upsert-form-item-title'>
            GENRE
            <br />
            <MultiSelect
              className='upsert-form-item-multi-select' 
              options={genreOptions}
              value={this.state.selectedGenre}              
              label="Select Genre"
              disableSearch={true}
              hasSelectAll={false}
              onChange={(event)=>{this.setState({selectedGenre : event})}}
            />
          </label>
          <label className='upsert-form-item-title'>
            RUNTIME
            <br />
            <input name="runTime" placeholder='minutes' className='upsert-form-item-input' value={this.state.movieData?.runTime}  
            onChange={this.handleChange}/>
          </label>
          <label className='upsert-form-item-overview'>
            OVERVIEW
            <br />
            <textarea name="description" placeholder='Movie Description' className='upsert-form-item-textarea' value={this.state.movieData?.description}  
            onChange={this.handleChange}/>
          </label>
          <div className='upsert-from-button-div'>
              <input className='reset-button' type="reset" value="Reset" />
              <Popup className="confirmation-popup" trigger={<button className='submit-button'>Submit</button>} position="bottom left" arrow={false}>
                <ConfirmationPopup />
              </Popup>             
          </div>
         
        </div>        
       
      </form>
    );
  }
}

export default UpsertMovie