import React from "react";


const img_api= "https://image.tmdb.org/t/p/w1280";


const setVoteClass=(vote) => {

    if(vote>=8){
        return "green";
    } else if(vote >=6) { 
        return "orange";
    } else {
        return "red";
    }
};

const Movie = ( {title, poster_path, overview, vote_average }) =>(
     <div className="movie">
         
        <img src ={poster_path ? (img_api + poster_path) :
        'https://www.biography.com/.image/t_share/MTUzMDQzNDUxMjAwNDE1MzUy/katherine-langford-wearing-dior-attends-lynn-hirschberg-celebrates-w-magazines-it-girls-with-dior-at-aoc-on-january-6-2018-in-los-angeles-california-photo-by-stefanie-keenan_getty-images-for-w-magazin.jpg'} alt={title} />
         <div className="movie-info">
             <h3>{title}</h3>
             <span className={
                 `tag  ${setVoteClass(vote_average)}`}>{vote_average}</span>
         </div>
      
      
         <div className="movie-over">
              <h2>overview :</h2>
              <p>{overview}</p>
        </div>
      
     </div>
     );


export default Movie;