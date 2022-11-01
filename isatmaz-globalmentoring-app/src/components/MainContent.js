import React, {Component} from "react";
import MovieBoard from "./movieComponents/MovieBoard";
import PageBanner from "./pageBanner/PageBanner";
import Header from "./headerComponent/Header";
import MovieBanner from "./movieBanner/MovieBanner";

class MainContent extends Component{    

    constructor(props) {
        super(props);
    
        this.state = {
          selectedMovie: undefined,
        };
      }
    
    onMovieClick = (movie) => {
        this.setState({ selectedMovie: movie });
    };
    
    render(){
        return (
            <div>
                <Header isMovieBannerOpen= {this.state.selectedMovie ? true : false}  />
                {this.state.selectedMovie ? <MovieBanner movieData={this.state.selectedMovie}/> : <PageBanner />}                
                <MovieBoard onMovieClick={this.onMovieClick}/>           
            </div>
        )
    }
}

export default MainContent;