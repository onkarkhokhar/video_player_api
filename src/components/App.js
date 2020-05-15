import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state={videos:[],selectedVideo: null};
    componentDidMount() {
        this.onSearchSubmit('buildings')
    }

    onSearchSubmit=async(term)=>{
        const response= await axios.get
        ('https://www.googleapis.com/youtube/v3/search',{
            params: {part:'snippet',
            maxResults:5,
            key: 'AIzaSyA5wUnuw9MDJ9M644IyVEzyITYMQLAQp3o',
            q: term}
        });
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    };


     onVideoSubmit=(video)=>{
         this.setState({selectedVideo:video});
     };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>


                            <SearchBar onFormSubmit={this.onSearchSubmit}/>
                            <div className="ui grid">
                    <div className="ui row">

                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                             </div>
                       <div className="five wide column">
                <VideoList onVideoSubmit= {this.onVideoSubmit} videos={this.state.videos}/>
                 </div>
                </div>
                </div>
            </div>
        );
    }
}
export default App;