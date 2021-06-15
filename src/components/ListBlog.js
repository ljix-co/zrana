import play_btn from '../images/play button.svg';
import VideoPlayer from './VideoPlayer';
const ListBlog = () => {
    // const playVideo = () => {
    //     this.refs.videoPlayer.play();
    // }
    return (
        <div className="list-blog">
            <div className="blog">
              <VideoPlayer/>
                <div className="blog-dtls">
                    <div className="rec-ta">
                        <h2 className="rec-title">Rižoto sa tikvicama</h2>
                        <p className="rec-author">Autor: Vanja Savić</p>
                    </div>
                    <ul className="rec-ingrdnts">
                        <li>300gr priniča</li>
                        <li>350gr piletine</li>
                        <li>2 tikvice</li>
                        <li>glavica crvenog luka</li>
                        <li>2 crvene paprike</li>
                        <li>so</li>
                        <li>biber</li>
                    </ul>
                </div>
            </div>


            <div className="blog">
            <VideoPlayer/>
                <div className="blog-dtls">
                    <div className="rec-ta">
                        <h2 className="rec-title">Rižoto sa tikvicama</h2>
                        <p className="rec-author">Autor: Vanja Savić</p>
                    </div>
                    <ul className="rec-ingrdnts">
                        <li>300gr priniča</li>
                        <li>350gr piletine</li>
                        <li>2 tikvice</li>
                        <li>glavica crvenog luka</li>
                        <li>2 crvene paprike</li>
                        <li>so</li>
                        <li>biber</li>
                    </ul>
                </div>
            </div>
            <div className="blog">
                <div className="video">
                    <video src="../video/dodirkišnih_kapi.mp4" poster="../images/home_img1.png"></video>
                    <button className="play-btn"><img className="play-ico" src={play_btn} alt="" /></button>
                </div>
                <div className="blog-dtls">
                    <div className="rec-ta">
                        <h2 className="rec-title">Rižoto sa tikvicama</h2>
                        <p className="rec-author">Autor: Vanja Savić</p>
                    </div>
                    <ul className="rec-ingrdnts">
                        <li>300gr priniča</li>
                        <li>350gr piletine</li>
                        <li>2 tikvice</li>
                        <li>glavica crvenog luka</li>
                        <li>2 crvene paprike</li>
                        <li>so</li>
                        <li>biber</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ListBlog;