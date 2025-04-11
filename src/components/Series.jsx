// export const Header=()=>{
//     return <h1>Header</h1>;
// }

// export const Footer=()=>{
//     return <h1>Footer</h1>;
// }

// const Card=()=>{
//     return <h1>This is default export</h1>
// }

// export default Card;

import seriesData from "../api/seriesData.json"

export const Series=()=>{
    return (
    <ul>
       {
        seriesData.map((currVal)=>{
            return (
        <li key={currVal.id}>
             
            <div>
                <img src={currVal.img_url}  alt=""  width="40%" height="40%"/>
            </div>
            <h2>Name : {currVal.name}</h2>
            <h3>Rating : {currVal.rating}</h3>
            <p>Summary : {currVal.description}</p>
            <p>Genre : {currVal.genre}</p>
            <p>Cast : {currVal.cast}</p>
            <a href={currVal.watch_url} target="_blank">
            <button>Watch Now</button>
            </a>
            </li>
          )
          
        })
       }

        
        
    
        
    </ul>
      
    );
};      