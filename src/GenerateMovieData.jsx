import MoviesData from "./data/MoviesData";

function GenerateMovieData() {
    return new Promise((resolve) => {
        setTimeout(() => { 
          resolve(MoviesData); 
        }, 500); 
      });
}

export default GenerateMovieData;