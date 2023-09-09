import React from 'react';
import { useNavigate } from 'react-router-dom';

function Mealitem({ data }) {
  const navigate = useNavigate();
  //console.log(data)
  let num =0;
  return (
    <>
      {
        (!data) ? <p style={{fontSize:"15px",fontWeight:"bold",color:"red"}}>Not found</p>: data.map(item => {
          return (
            <div className='card' key={num++}>
             <img src={item.strMealThumb} key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}} alt='' />
              <h3>{item.strMeal}</h3>
            </div>
          )


        })
      }

    </>
  )
}

export default Mealitem;