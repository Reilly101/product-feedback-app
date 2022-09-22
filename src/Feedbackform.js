import { useEffect, useState } from "react";

export default function Feedbackform({
  addfeedback,
  setShow,
  selecteditem,
  updatefeedback,
  setSelecteditem
}) {
  let [object, setObject] = useState({
    title: "hello",
    category: "ux",
    upvotes: 0,
    status: "suggestion",
    description: "",
  });

  useEffect(() => {
    if (selecteditem) {
      setObject(selecteditem);
    }
  }, [selecteditem]);

  let [validation, setValidation] = useState(false);

  return (
    <div className="modal">
      <div className="form">
        <div className="lefttop">
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
          <button className="goback" onClick={() => setShow(false)}>
            Go Back
          </button>
        </div>
        <img src="Group 4-5.png" />
        <div className="title">
          {selecteditem === null ? "Create New" : "Update"} Feedback
        </div>
        <div className="fbtitle">Feedback Title</div>
        <input
          className="feedbackinput"
          placeholder="Add a short, descriptive headline"
          value={object.title}
          onChange={(event) =>
            setObject({ ...object, title: event.target.value })
          }
        />
        {validation && !object.title && (
          <div style={{ color: "red" }}>Can't be empty</div>
        )}

        <div className="categoryfeedback">
          <div className="category">Category</div>
          <div className="choosecategory">
            Choose a category for your feedback
          </div>
          <select
            className="selectoptions"
            onChange={(event) =>
              setObject({ ...object, category: event.target.value })
            }
            value={object.category}
          >
            <option value="feature">Feature</option>
            <option value="ui">UI</option>
            <option value="ux">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
          </select>
          <div className="feedbackdetails">
            <div className="fbdetailtitle">Feedback Detail</div>
            <div className="fbdetailsubtitle">
              Include any specific comments on what should be improved, added,
              etc.
            </div>
            <input
              className="fddetailinput"
              onChange={(event) =>
                setObject({ ...object, description: event.target.value })
              }
              value={object.description}
            />
            {validation && !object.description && (
              <div style={{ color: "red" }}>Can't be empty</div>
            )}

            <div className="buttons">
              <button className ="delete" onClick ={()=>{updatefeedback(null) 
                setShow(false)
                setSelecteditem(-1)
              }
                
                }>Delete</button>
              <button className="cancel" onClick={() => setShow(false)}>
                Cancel
              </button>
              <button
                className="addfeedbackform"
                onClick={() => {
                  // debuggertt
                  if (Object.values(object).every((value) => value !== "")) {
                    if (selecteditem === null) {
                      addfeedback(object);
                    } else {
                      updatefeedback(object);
                    }
                  } else {
                    setValidation(true);
                    //alert('all inputs should be fullfilled')
                  }
                }}
              >
                {selecteditem === null ? "Add" : "Update"} Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
