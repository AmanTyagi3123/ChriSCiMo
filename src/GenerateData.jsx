import SlidesData from "./data/SlidesData";

function GenerateData(){
    return new Promise((resolve) => {
      setTimeout(() => { 
        resolve(SlidesData); 
      }, 500); 
    });
  }

export default GenerateData