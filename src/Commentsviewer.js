import React, { useState } from "react";
import Replyinput from "./Replyinput";

export default function Commentsviewer({
  comments,
  children,
  updatefeedback,
  setPreviewShow,
  setShow,
}) {
  function totalcomments(comments) {
    return comments
      ? comments.filter(Boolean).length +
          comments
            .filter(Boolean)
            .reduce(
              (mem, comment) => (mem += totalcomments(comment.replies)),
              0
            )
      : 0;

    //3+1+1+1
  }

  return (
    <>
      <div className="toprow">
        <div className="gobackbox" onClick={() => setPreviewShow(false)}>
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.33447 9L0.334473 5L4.33447 1"
              stroke="#4661E6"
              strokeWidth="2"
            />
          </svg>
          <button className="goback">Go Back</button>
        </div>
        <button className="editbutton" onClick={() => setShow(true)}>
          Edit Feedback
        </button>
      </div>
      {children}
      <div>
        {totalcomments(comments)} Comments
        {comments.map((comment, index) => (
          <Comment
          key={comment.id}
            comment={comment}
            addReply={(reply) => {
              if (reply) {
                let newComments = [...comments];
                if (newComments[index].replies) {
                  newComments[index].replies.push(reply);
                } else {
                  newComments[index].replies = [reply];
                }
                updatefeedback({ comments: [...newComments] });
              } else {
                updatefeedback({ comments: [...comments] });
              }
            }}
          />
        ))}
      </div>
      <Replyinput
        comment
        add={(comment) => updatefeedback({ comments: [...comments, comment] })}
      />
    </>
  );
}

function Comment({ comment, addReply }) {
  let [showreply, setShowreply] = useState(false);

  //debugger

  return (
    <div className="commentscontainer">
      <div className="userinfo">
        <div className="picrectangle">
          <img src={comment.user.image} />
        </div>
        <div className="username">{comment.user.name}</div>
        <div className="useraddress">{comment.user.username}</div>
        <button className="replybtn" onClick={() => setShowreply(!showreply)}>
          Reply
        </button>
      </div>
      <div className="context">
        <div className="commentstext">{comment.content}</div>
      </div>
      <div className="replycontainers">
        {showreply && (
          <Replyinput
            add={(e) => {
              addReply(e);
              setShowreply(false);
            }}
          />
        )}
        {comment.replies &&
          comment.replies.filter(Boolean).map((reply, index) => (
            <Comment
              comment={reply}
              addReply={(reply) => {
                let newReplies = [...comment.replies];
                if (newReplies[index].replies) {
                  //newReplies[index].replies.pop()
                  newReplies[index].replies.push(reply);
                } else {
                  newReplies[index].replies = [reply];
                }
                addReply();
              }}
            />
          ))}
      </div>
    </div>
  );
}

//Boolean(undefined)=> false
