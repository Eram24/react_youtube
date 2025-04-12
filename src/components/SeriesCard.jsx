export const SeriesCard=(props)=>{
    // console.log(props);
    const { data } = props;
    console.log(data);
    return (
        <li >
            <div>
                <img src={data.img_url}  alt=""  width="40%" height="40%"/>
            </div>
            <h2>Name : {data.name}</h2>
            <h3>Rating : {data.rating}</h3>
            <p>Summary : {data.description}</p>
            <p>Genre : {data.genre}</p>
            <p>Cast : {data.cast}</p>
            <a href={data.watch_url} target="_blank">
            <button>Watch Now</button>
            </a>
            </li>
          )
}