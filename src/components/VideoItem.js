import React from 'react';
import './VideoItem.css'

const VideoItem=({video,onVideoSubmit})=>{
    return (
        <div onClick={()=>onVideoSubmit(video)} className="video-item item" className= "ui segment">
            <img className="ui image" alt ={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
};

export default VideoItem;
