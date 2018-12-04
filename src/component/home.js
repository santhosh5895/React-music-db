import React, {Component} from 'react';
import Banner from "../component/banner";
import ArtistsList from '../component/artistsList';

const url_artists = "http://localhost:3004/artists";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            artists:'',
            isLoading: false
        }
    }

    componentDidMount(){
        this.setState({isLoading:true});
        fetch(url_artists,{
            method:"GET"
        }).then(response => response.json())
        .then(data => {this.setState({artists:data, isLoading:false})});
    }

    render(){
        return(
            <div>
                <Banner/>
                <ArtistsList data={this.state}></ArtistsList>
            </div>
        )
    }
};

export default Home;