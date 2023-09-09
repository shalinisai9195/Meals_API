import React, { useEffect, useState } from 'react'
import Mealitem from './Mealitem';

function Food() {

  const[url,setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const[search,setSearch] = useState("")
  const[iteam,setIteam] = useState();
  const[show,setShow] = useState(false)
  

  useEffect(()=>{
     fetch(url).then(res=> res.json()).then(data=>{
      //console.log(data)
      setIteam(data.meals)
      setShow(true);
     })
  },[url])

  const searchRecipe = (e)=>{
    if(e.key === 'Enter'){
       setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }

  }

  return (
    <>
      <div className='main'>
        <div className='heading'>
          <h1>Welcome you..Search your Favorite Food Recipe!</h1>
          <h4>If you can't feed a hundred people, then feed just one.!</h4>
        </div>
        <div className='searchBox'>
          <input type='search' className='search-bar' onChange={(e)=>{setSearch(e.target.value)}} 
          onKeyDown={searchRecipe} placeholder='type here like.. cake, soup'/>
        </div>
        <div className='container'>

         {
         show ? <Mealitem data={iteam}/> : <p style={{fontSize:"15px",fontWeight:"bold",color:"red"}}>Not found</p> 
        }
         
        </div>
      </div>
    </>
    
  )
}

export default Food