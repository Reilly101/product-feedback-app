import React, { useState } from "react";
import Card from "./Card";

export default function ColumnView({
  setShow,
  feedbacks,
  setshowColumnView,
  toggleUpvote,
}) {
  console.log(
    Object.entries(
      feedbacks.reduce((mem, feedback) => {
        if (!(feedback.status in mem)) {
          mem[feedback.status] = [];
        }
        mem[feedback.status].push(feedback);
        return mem;
      }, {})
    )
  );
  return (
    <div className="mainholder">
      <div className="topheader">
        <div>
          <button className="goback" onClick={() => setshowColumnView(false)}>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.33447 9L0.334473 5L4.33447 1"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
            </svg>
            Go Back
          </button>
          <div className="title"> Roadmap</div>
        </div>

        <button className="addfeedback" onClick={() => setShow(true)}>
          + Add Feedback
        </button>
      </div>

      <div className="columnsetup">
        {Object.entries(
          feedbacks.reduce((mem, feedback) => {
            if (!(feedback.status in mem)) {
              mem[feedback.status] = [];
            }
            mem[feedback.status].push(feedback);
            return mem;
          }, {})
        ).map(([key, value]) => (
          <div className="column" key={key}>
            <div className="titleboxtop">
              <div className="titlevalue">
                <div className="title">{key}</div>
                <div className="valuenum">{value.length}</div>
              </div>
              <div className="subtitle">Ideas prioritized for research</div>
            </div>
            {value.map((feedback) => (
              <Card
                key={feedback.id}
                data={feedback}
                toggleUpvote={toggleUpvote}
              
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// [item,item,item]
// {planned:[item,item],inProgress:[item]}
