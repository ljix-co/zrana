import play_btn from '../images/play button.svg';
import React from 'react';
class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
        this.btnRef = React.createRef();
        this.playVideo = this.playVideo.bind(this);
        this.pauseVideo = this.pauseVideo.bind(this);
    }

    pauseVideo() {
        this.videoRef.current.controls = false;
        this.btnRef.current.style = 'opacity: 1;'
    }
    playVideo = () => {
        this.videoRef.current.play();
        this.videoRef.current.controls = true;
        this.btnRef.current.style = 'opacity: 0;'
    }
    render() {
        return (
            <div className="video">
                <video ref={this.videoRef} 
                src="../video/dodirkišnih_kapi.mp4" poster="../images/home_img2.png" 
                onPause={this.pauseVideo} ></video>
                <button ref={this.btnRef} className="play-btn" onClick={this.playVideo}><img className="play-ico" src={play_btn} alt="" /></button>
            </div>
        );
    }
}

export default VideoPlayer;