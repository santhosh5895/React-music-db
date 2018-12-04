import React, {Component} from 'react';
import Banner from "../component/banner";
import ArtistsList from '../component/artistsList';

const url_artists = "http://localhost:3004/artists";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            artists:'',
            isLoading: false,
            error: false
        }
    }

    componentDidMount(){
        this.setState({isLoading:true});
        fetch(url_artists,{
            method:"GET"
        }).then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })
        .then(data => {this.setState({artists:data, isLoading:false})})
        .catch(error => this.setState({ error, isLoading: false }));
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