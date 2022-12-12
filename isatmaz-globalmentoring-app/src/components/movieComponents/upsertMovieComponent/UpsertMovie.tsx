import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import DatePicker from "react-datepicker";
import { MultiSelect } from "react-multi-select-component";
import "react-datepicker/dist/react-datepicker.css";
import ConfirmationPopup from '../confirmationComponent/ConfirmationPopup';
import {AiOutlineClose} from 'react-icons/ai';
import './UpsertMovie.css';
import { Formik } from 'formik';
import { MovieType } from '../../../store/movies/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addNewMovie, updateSelectedMovie } from '../../../store/movies/movieOperationSlice';
import { MovieSchema } from './validation';

function UpsertMovie (props : any) {
  const {setIsUpsertOpen, setIsConfirmationOpen, mode, movieData} = props;
  const [resetTriggered, setResetTriggered] = useState(false);
  const mockGenres = [
    { label: 'Crime', value: 'crime' },
    { label: 'Documentary', value: 'documentary' },
    { label: 'Horror', value: 'horror' },
    { label: 'Comedy', value: 'comedy' },
  ];
  const [selected, setSelected] = useState<
        {
            label: string;
            value: string;
        }[]
    >([]);
  useEffect(()=>{
    if(resetTriggered){
      //setMovieData(props.movieData ? props.movieData : initialMovieData);
      setResetTriggered(false);
    }
  }, [resetTriggered])  

  function getDate(releaseDate:  any){
    if(releaseDate){
        const date=new Date(releaseDate)
        return date;
    }
    return null;
  }

  const dispatch = useAppDispatch();
  const options = movieData?.genres
      ? [
            ...movieData.genres.map((el) => {
                return {
                    label: el,
                    value: el.toLowerCase(),
                };
            }),
            ...mockGenres,
        ]
      : mockGenres;

  useEffect(() => {
      if (movieData && mode === 'edit') {
          setSelected([
              ...movieData.genres.map((el) => {
                  return {
                      label: el,
                      value: el.toLowerCase(),
                  };
              }),
          ]);
      }
  }, [movieData, mode]);
    const handleFormSubmit = (values: MovieType) => {
      const movieDataToSend = {
          ...movieData,
          ...values,
          vote_average: Number(values.vote_average),
          runtime: Number(values.runtime),
          genres: selected.map((el) => el.label),
      };
      if (mode === 'edit' && movieData) {
          dispatch(updateSelectedMovie(movieDataToSend));
      } else {
          dispatch(addNewMovie(movieDataToSend));
      }
      setIsUpsertOpen(false);
      setIsConfirmationOpen(true);
  };
  const initialMovieData = {
    title: (mode === 'edit' && movieData?.title) || '',
    release_date: (mode === 'edit' && movieData?.release_date) || '',
    poster_path: (mode === 'edit' && movieData?.poster_path) || '',
    vote_average: (mode === 'edit' && movieData?.vote_average) || '',
    genres: (mode === 'edit' && movieData?.genres) || [],
    runtime: (mode === 'edit' && movieData?.runtime) || '',
    overview: (mode === 'edit' && movieData?.overview) || '',
    tagline: (mode === 'edit' && (movieData?.tagline && "field has issue")) || "field has issue",
};
  return (
    <Formik
        validationSchema={MovieSchema}
        enableReinitialize={true}
        onSubmit={(values) => handleFormSubmit(values)}
        initialValues={initialMovieData}
    >
        {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            errors,
            touched,
        }) => (
            <form className='upsert-form' onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(e);
                  }}>        
                  <p className='upsert-form-header'> {mode=="edit" ? "EDIT": "ADD"} YOUR MOVIE</p>
                  <div className='upsert-form-div'>
                    <AiOutlineClose className='upsert-form-close' onClick={()=>setIsUpsertOpen(false)}/>
                    <label className='upsert-form-item-title'>
                      TITLE
                      <br />
                      <input value={values.title} name="title" placeholder='title' className='upsert-form-item-input' onChange={handleChange}
                      />
                      {errors.title && touched.title ? (
                                <span className="validation-error">* {errors.title.toString()}</span>
                            ) : null}
                    </label>
                    <label className='upsert-form-item-title'>
                      RELEASE DATE
                      <br />
                      <DatePicker placeholderText="Select Date" name='release_date' className='upsert-form-item-datepicker'
                      selected={getDate(values.release_date)} 
                        onChange={(date: any) => {
                          values.release_date=date;
                          //handleChange(date);
                        }}/>
                        {errors.release_date && touched.release_date ? (
                                <span className="validation-error">* {errors.release_date.toString()}</span>
                            ) : null}
                    </label>
                    <label className='upsert-form-item-title'>
                      MOVIE URL
                      <br />
                      <input value={values.poster_path} onChange={handleChange} name="poster_path" placeholder='https://' className='upsert-form-item-input'/>
                    </label>
                    <label className='upsert-form-item-title'>
                      RATING
                      <br />
                      <input value={values.vote_average} onChange={handleChange} name='vote_average' placeholder='7.8' className='upsert-form-item-input'/>
                      {errors.vote_average && touched.vote_average ? (
                                <span className="validation-error">* {errors.vote_average.toString()}</span>
                            ) : null}
                    </label>
                    <label className='upsert-form-item-title'>
                      GENRE
                      <br />
                      <MultiSelect
                        className='upsert-form-item-multi-select' 
                        options={options}
                        value={selected}              
                        labelledBy="Select Genre"            
                        disableSearch={true}
                        hasSelectAll={false}
                        onChange={(e, e1)=>{  
                            setSelected(e)
                          }
                        }
                      />
                    </label>
                    <label className='upsert-form-item-title'>
                      RUNTIME
                      <br />
                      <input value={values.runtime} onChange={handleChange} name="runtime" placeholder='minutes' className='upsert-form-item-input'/>
                      {errors.runtime && touched.runtime ? (
                                <span className="validation-error">* {errors.runtime.toString()}</span>
                            ) : null}
                    </label>
                    <label className='upsert-form-item-overview'>
                      OVERVIEW
                      <br />
                      <textarea value={values.overview} onChange={handleChange} name="overview" placeholder='Movie Description' className='upsert-form-item-textarea'/>
                      {errors.overview && touched.overview ? (
                                <span className="validation-error">* {errors.overview.toString()}</span>
                            ) : null}
                    </label>                    
                    <div className='upsert-from-button-div'>
                        <button className='reset-button' onClick={()=>{setResetTriggered(true)}}>Reset</button>
                        <button className='submit-button' onClick={(e: any)=> { handleSubmit(e)}}>Submit</button>                                    
                    </div>
                  </div>  
                </form>
          )}
          </Formik>
    
  );
}

export default UpsertMovie