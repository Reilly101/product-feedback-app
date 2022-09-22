import React, { useState } from "react"

export default function Replyinput({add,comment}) {
    let [reply, setReply] = useState('')

    return (
        <div className="replyform">
            <input className="replyinputform" value ={reply} placeholder={`Your ${comment? 'Comment': 'Reply'}`} onChange={(event) => setReply(event.target.value)}/>
            <div className="fillinreply"></div>
            <button className="post reply" onClick = {()=> add({
              "content": reply,
              "user": {
                "image": "./assets/user-images/image-zena.jpg",
                "name": "Reily",
                "username": "Reily91"
              }
            }) } >Post {comment ? 'Comment': 'Reply'}</button>
            {300 - reply.length} characters left
        </div>
    )
}