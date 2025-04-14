// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import { Fragment } from "react"

//  export const Card=()=> {(<div>
//     <Series/>
//     <Series></Series>
//      {Series}
//      </div>)
//  };

// const Series=()=>{
//   return (
//     <div>
      
//         <img src="/hen.jpg" alt="" width="400px" />
      
//       <h1>Name: Series name</h1>
//       <h2>Rating : 8.5</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur nisi ullam adipisci recusandae unde placeat veritatis sunt quidem, minus est eaque quas nostrum rerum eligendi aliquid assumenda iusto porro.</p>
//     </div>
//   )
// }

// ************Array with keys******************************
// export const Card=()=>{
//   return  [<Series key="1"/>, <Series key="2"/> , <Series key="3"/>]
// }


// using fragment***************************
// import {Fragment} from "react";
// int this case
/* <Fragment></Fragment> */


// or 
// import React from "react";
// in this case 
// <React.Fragment></React.Fragment>

// export const Card=()=>{
//   return  (
//     <React.Fragment>
//       <Series/>
//       <Series/>
//       <Series/>
//     </React.Fragment>
//   )
// }


//empty tag*****************************
//another method

// export const Card=()=>{
//   return  (
//     <>
//       <Series/>
//       <Series/>
//       <Series/>
//     </>
//   )
// }



//***************dynamic values ****************
// 1.variable
// 2.expression
// 3.function
// const Series=()=>{
//      const name =" Series name";
//      const rating="5";
//      const summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur nisi ullam adipisci recusandae unde placeat veritatis sunt quidem, minus est eaque quas nostrum rerum eligendi aliquid assumenda iusto porro.";
     
//      const genre=()=>{
//       const movieType="horror";
//       return movieType;
//      }
//      const age=19;
//      function canWatch(){
//       if(age>=18) return "Watch Now";
//       return "Skip";
//      }
//     return (
//       <div>
        
//           <img src="/hen.jpg" alt="" width="400px" />
        
//         <h1>Name:{name}</h1>
//         <h2>Rating :{2+6} </h2>
//         <p>{summary}</p>
//         <h3>{genre()}</h3>
//         {/* <button>{age>=18? "Watch Now" : " Skip"}</button> */}
//         <button>{canWatch()}</button>
//       </div>
//     )
//   }

 
import {Series} from "./components/Series"
import "./components/Series.css";
export const App=()=>{
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <Series></Series>
    </section>
  )
}