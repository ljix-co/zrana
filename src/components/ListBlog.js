import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import VideoPlayer from './VideoPlayer';
const ListBlog = ({ blogs }) => {
    return (
        <div className="list-blog">
            {blogs && blogs.map((blog) => (

                <div className="blog" key={blog.bl_id}>
                    <VideoPlayer video={blog.video_path} poster={blog.img_path} />
                    <Link to={`/blog/${blog.bl_id}`}>
                        <div className="blog-dtls">
                            <div className="rec-ta">
                                <h2 className="rec-title">{blog.bl_title}</h2>
                                <p className="rec-author">Autor: {blog.bl_author}</p>
                            </div>
                            <ul className="rec-ingrdnts">
                                {blog.ings && blog.ings.map((ing) => (<li key={blog.bl_id + ',' + ing.ing_id}>{ing.ing_name}</li>))}

                            </ul>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ListBlog;