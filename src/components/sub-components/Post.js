import React from 'react';

const Post = ({ title, excerpt, avatar, views, time, total_comments}) => {
    return (
        <div className="post">
            <div className="wrap-ut pull-left">
                <div className="userinfo pull-left">
                    <div className="avatar">
                        <img src={avatar} alt="" />
                        <div className="status green">&nbsp;</div>
                    </div>

                    {/* <div className="icons">
                        <img src="images/icon1.jpg" alt="" /><img src="images/icon4.jpg" alt="" />
                    </div> */}
                </div>
                <div className="posttext pull-left">
                    <h2><a href="02_topic.html">{title}</a></h2>
                    <p>{excerpt}</p>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="postinfo pull-left">
                <div className="comments">
                    <div className="commentbg">
                        {total_comments}
                        <div className="mark"></div>
                    </div>

                </div>
                <div className="views"><i className="fa fa-eye"></i> {views}</div>
                <div className="time"><i className="fa fa-clock-o"></i> {time}</div>
            </div>
            <div className="clearfix"></div>
        </div>

    );
}

export default Post;
