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
import { SeriesCard } from "./SeriesCard";

export const Series=()=>{
    return (
    <ul>
       {
        seriesData.map((Val)=> <SeriesCard key={Val.id} data={Val}/>
    )} 
    </ul>
      
    );
};      