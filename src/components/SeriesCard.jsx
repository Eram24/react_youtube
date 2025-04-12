export const SeriesCard=({data})=>{
    // console.log(props);
    const { id,img_url,name,rating,description,genre,cast,watch_url } = data;
    console.log(name);
    return (
        <li >
            <div key={id}>
                <img src={img_url}  alt=""  width="40%" height="40%"/>
            </div>
            <h2>Name : {name}</h2>
            <h3>Rating : {rating}</h3>
            <p>Summary : {description}</p>
            <p>Genre : {genre}</p>
            <p>Cast : {cast}</p>
            <a href={watch_url} target="_blank">
            <button>Watch Now</button>
            </a>
            </li>
          )
}