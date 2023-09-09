import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeInfo() {
  const {id} = useParams();
  const[detail,setDetail] = useState("");
  if(id !== ""){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res=> res.json())
    .then(data=>{
      //console.log(data.meals[0])
      setDetail(data.meals[0])
    })
  }
  return (<>
     {
       (!detail) ? "" : (<>
           <div className='content'>
               <img src={detail.strMealThumb} alt=''/>
               <div className='inner-content'>
                   <h1>{detail.strMeal}</h1>
                   <h2>{detail.strArea} Food</h2>
                   <h3>Category {detail.strCategory}</h3>
               </div>
           </div>
           <div className='recipe-details'>
            <div className='instructions'>
              <h2>Instructions</h2>
              <h4>{detail.strInstructions}</h4>
            </div>
            
        </div>
       
       </>)

     }
    
    </>
  )
}

export default RecipeInfo