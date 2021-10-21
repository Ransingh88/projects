import React, { useState } from 'react'
import './Comments.css'

const Comment = ({comments}) => {
    console.log(comments);

    
    return (
        <>
            {comments.map((item) => {
                console.log(item)
               
                const hasComments = item.replies && item.replies.length;
                console.log(hasComments, item.replies)
                return <ul className="comment__itemList"><li ><div key={item.id}>
                <div className="comments">
                    <div className="comments__details">
                        <p>{item.author}</p>
                        <p>{item.points} points</p>
                        <p>{item.timestamp.slice(4,21)}</p>
                    </div>
                    <div className="comments__message">
                        <p>{item.body}</p>
                    </div>
                    <div className="comments__actions">
                        <p>Replay</p>
                        <p>Give Award</p>
                        <p>Share</p>
                        <p>Report</p>
                        <p>Save</p>
                    </div>
                        </div>
                        </div></li>
                      
        {hasComments && item.replies.map((item) => (
            <Comment key={item.id} comments={ [item]}/>
            
            
        ))}</ul>

                
            
                
                

                
            })}

            </>
    )
}

export default Comment
