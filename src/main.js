module.exports = {
    aritGeo: (arr) =>{
        if(!(arr.every((elem) =>  typeof elem === "number"))){
          return 'enter an array that contains all numbers';
        } else {
          let ratio = arr[1] / arr[0];
          let difference = arr[1] - arr[0];
          let geo = false;
          let arit = false;
          const length = arr.length -1;
           
          if (arr.length === 0){
            return 0;
          }
          for (let i = 0; i < length; i++) {
            arit = (arr[i + 1] - arr[i] == difference);
            geo =  (arr[i + 1] / arr[i] == ratio);
          }
        
          if (arit){
            return "Arithmetic";  
          }
          else if (geo){
            return "Geometric";
          } 
          else if ((!arit) && (!geo)) {
            return -1;
          }
        }
    }

};
    
   