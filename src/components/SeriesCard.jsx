
import styles from "./Series.module.css";
import styled from "styled-components";

export const SeriesCard=({data})=>{
    // console.log(props);
    const { id,img_url,name,rating,description,genre,cast,watch_url } = data;
    const ratingClass=rating>=8.5 ? styles["super-hit"] : styles.average;
    
    const watchBtn={
        backgroundColor: `${rating>=8.5 ? "rgb(89, 214, 177" : "rgb(240, 213, 93)"}`,
        padding: "0.7rem 1.5rem",
        color: '#000',
        marginTop: '1rem',
        border:'none',
        fontWeight: "600",
     }

    console.log(name);
    return (
        <li className={styles.card}>
            <div key={id} className={styles.img}>
                <img src={img_url}  alt=""  width="40%" height="40%"/>
            </div>
            <div className={styles.content}>
            <h2 > Name : {name}</h2>
            <h3>Rating :<span className={`${styles.rating} ${ratingClass}` }>{rating}</span></h3>
            <p>Summary : {description}</p>
            <p>Genre : {genre}</p>
            <p>Cast : {cast}</p>
            <a href={watch_url} target="_blank">
            { <button style={watchBtn}>Watch Now</button>
            }
            
            </a>
            </div>
            
            </li>
          )
}