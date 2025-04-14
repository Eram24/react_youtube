import "./Series";

export const SeriesCard=({data})=>{
    // console.log(props);
    const { id,img_url,name,rating,description,genre,cast,watch_url } = data;
    const ratingClass=rating>=8.5 ? "super-hit" : "average";
    
    const watchBtn={
        backgroundColor: `${rating>=8.5 ? "rgb(89, 214, 177" : "rgb(211, 172, 115)"}`,
        padding: "0.7rem 1rem",
        color: '#fff',
        marginTop: '1rem',
        border:'none',
        color: "#000",
        fontWeight: "600"
     }

    console.log(name);
    return (
        <li className="card">
            <div key={id} className="img">
                <img src={img_url}  alt=""  width="40%" height="40%"/>
            </div>
            <div className="content">
            <h2 > Name : {name}</h2>
            <h3>Rating :<span className={`rating ${ratingClass}` }>{rating}</span></h3>
            <p>Summary : {description}</p>
            <p>Genre : {genre}</p>
            <p>Cast : {cast}</p>
            <a href={watch_url} target="_blank">
            <button style={watchBtn}>Watch Now</button>
            </a>
            </div>
            
            </li>
          )
}