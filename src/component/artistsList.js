import React from 'react';
import { Link } from 'react-router-dom';

const ArtistsList = ({data}) => {
    if (data.isLoading){
        return(
            <div className="loading">Loading...</div>
        )
    };
    const list = (artists) =>{
        if(artists){
            return artists.map(item => {
                const style = {
                    background:`url(/images/covers/${item.cover}.jpg) no-repeat`
                }
                return(
                    <Link key={item.id} to={`/artist/${item.id}`} 
                    className='artist_item' style={style}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }
    }
    return(
        <div className='artists_list'>
            <h4>Browse artist list</h4>
            {list(data.artists)}
        </div>
    );
}

export default ArtistsList;