import React, {Component} from 'react';
import Header from './header';

const db_url = "http://localhost:3004/artists";

class Artist extends Component{
    constructor(props){
        super(props);
        this.state={
            artist:'',
            error:''
        }
    }
    componentDidMount(){
        fetch(`${db_url}/${this.props.match.params.artistId}`,{
            method: "GET"
        }).then(response =>{
            if(response.ok){
                return response.json();
            }
            else throw new Error("OOPS!  Something happened..");
        }).then(data => {
            this.setState({artist:data})
        }).catch(error => this.setState({error}))
    }

    albumList(albumList) {
        if(albumList){
            return albumList.map(item => (
                <img key={item.albumId} src={`/images/albums/${item.cover}.jpg`} alt={item.title}/>
            ))
        }
    }

    render(){
        if(this.state.error){
            console.log(JSON.stringify(this.state.error))
            return(
                <h4 className='loading'>{this.state.error.message}</h4>
            )
        }
        return(
            <div>
                <Header/>
                <div className='artist_bio'>
                    <div className='avatar'>
                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
                    </div>
                    <div className='bio'>
                        <h3>{this.state.artist.name}</h3>
                        <div className='bio_text'>{this.state.artist.bio}</div>
                    </div>
                    <h4 className='album_header'>Albums</h4>
                    <div className='album_list'>{this.albumList(this.state.artist.albums)}</div>
                </div>
            </div>
        )
    }
};

export default Artist;