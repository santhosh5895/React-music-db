import React from 'react';
import { Link } from 'react-router-dom';

const ArtistsList = ({data}) => {
    console.log(data.isLoading);
    if (data.isLoading){
        console.log("Loading");
        return(
            <div className="loading">Loading...</div>
        )
    };
    const list = (artists) =>{
        console.log(artists);
        if(artists){
            return artists.map(item => (
                <Link key={item.id} to={`/artist/${item.id}`} className='artist_item'>
                    <div>{item.name}</div>
                </Link>
            ))
        }
    }
    return(
        <div>
            <h4>Browse artist list</h4>
            {list(data.artists)}
        </div>
    );
}

export default ArtistsList;