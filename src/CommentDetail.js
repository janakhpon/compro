import React from 'react';


const CommentDetail = props => {
    return (
        <div className="ui comments">

            <div className="comment">
                <a className="avatar" href="/">
                    <img alt="avator" src={props.avator} />
                </a>
                    
                    <div className="content">
                                <a href="/" className="author">{props.author}</a>
                                <div className="metadata">
                                    <div className="date">{props.date}</div>
                                </div>
                                <div className="text">
                                    {props.text}
                                </div>
                    </div>
                </div>
            </div>



            );

};

export default CommentDetail;
