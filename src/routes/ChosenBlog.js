import VideoPlayer from "../components/VideoPlayer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIngr } from "../HelperFunctions";
import axios from 'axios';
import {Helmet} from 'react-helmet';
import './style/Chosen.css';

const ChosenBlog = ({ bUrl }) => {

    const { id } = useParams();
    const [blog, setBlog] = useState();
    const [isPending, setIsPending] = useState(false);

    const getData = () => {
        axios.get(bUrl + 'blog/' + id).then(res => {
            console.log(res);
            // setRec(res.data.data);
            getIngr(res.data.data, bUrl, setBlog, setIsPending, axios)
        })
    }
    useEffect(() => { getData() }, []);

    return (
        <div className="chosen-div">
            {isPending && (
                <h1>Učitavam...</h1>
            )}
             {blog &&
                <Helmet>
                    <meta name="description" content="Z'Rana recepti registrovanih korisnika." />
                    <meta id="og-title" property="og:title" content={blog[0].bl_title} />
                    <meta id="og-image" property="og:image" content={blog[0].img_path} />
                </Helmet>}
            {blog && blog.map((blog) => (
                <div className="chosen">
                    <div className="l-side">
                        <h1>{blog.bl_title}</h1>
                        <h3>Originalni autor: {blog.bl_author}</h3>
                        <img src={blog.img_path} alt="" />
                        <ul className="rec-ingrdnts">
                            {blog.ings && blog.ings.map((ing) =>
                                (<li key={ing.ing_id + ',' + blog.bl_id}>{ing.ing_name.toLowerCase()}</li>))}

                        </ul>
                    </div>
                    <div className="r-side">
                        <p>{blog.bl_txt}</p>
                        <p>{blog.bl_healthy}</p>
                    </div>
                        <VideoPlayer video={blog.video_path} poster={blog.img_path} />
                </div>
            ))}
        </div>
    );
}

export default ChosenBlog;