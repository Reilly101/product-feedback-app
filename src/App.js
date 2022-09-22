import react from "react";
import "./App.css";
import Feedback from "./Feedback";
import Leftcontainer from "./Leftcontainer";
import Blueheader from "./Blueheader";
import data from "./data.json"
import { useState, useEffect } from "react";
import Feedbackform from "./Feedbackform";
import Commentsviewer from "./Commentsviewer"
import ColumnView from './ColumnView'
import icon from './icon.svg'
import  Emptyfeedback from './Emptyfeedback'

export default function App() {
  let [selected, setSelected] = useState('All');
  let [show, setShow] = useState(false)
  let [feedbacks, setFeedbacks] = useState(data.productRequests)
  // let [feedbacks, setFeedbacks] = useState([])
  let [filtered, setFiltered] = useState([])
  let [sorted, setSorted] = useState('')
  let [selecteditem, setSelecteditem] = useState(-1)
  let [previewShow, setPreviewShow] = useState(false)
  let [showColumnView, setshowColumnView] = useState(false)

  useEffect(() => {
    let newFiletered = feedbacks.filter(item => item.category.toLowerCase() == selected.toLowerCase() || selected === 'All')

    switch (sorted) {
      case 'Most Upvotes':
        newFiletered.sort((a, b) => b.upvotes - a.upvotes)

        break
      case 'Least Upvotes':
        newFiletered.sort((a, b) => a.upvotes - b.upvotes)

        break

      case 'Least Comments':
        newFiletered.sort((a, b) =>
          (a.comments ? a.comments.length : 0) - (b.comments ? b.comments.length : 0)

        )

        break

      case 'Most Comments':
        newFiletered.sort((a, b) =>
          (b.comments ? b.comments.length : 0) - (a.comments ? a.comments.length : 0)

        )

        break
    }


    setFiltered(newFiletered)

    // debugger
  }, [sorted, selected, feedbacks])


  function addfeedback(feedback) {
    feedback.id = feedbacks.length + 1
    //debugger
    setFeedbacks([...feedbacks, feedback])
    setShow(false)
  }
  function updatefeedback(feedback) {
    let index = feedbacks.findIndex(item => item.id == selecteditem)
    if (feedback === null) {
      feedbacks.splice(index, 1)
    } else {
      feedbacks[index] = feedback

    }
    setFeedbacks([...feedbacks])
    setShow(false)

  }


  function toggleUpvote(id) {

    let index = feedbacks.findIndex((item) => item.id == id)
    if (!feedbacks[index].voted) {
      feedbacks[index].voted = true
      feedbacks[index].upvotes += 1
    } else {
      feedbacks[index].voted = false
      feedbacks[index].upvotes -= 1
    }
    setFeedbacks([...feedbacks])

  }

  return (
    show ?
      <Feedbackform
        setShow={setShow}
        addfeedback={addfeedback}
        selecteditem={feedbacks.find(item => item.id == selecteditem) || null}
        updatefeedback={(f) => {
          updatefeedback(f)
          setSelecteditem(-1)
        }}

      /> :

      previewShow && feedbacks.find(item => item.id == selecteditem) ?
        <Commentsviewer
          comments={feedbacks.find(item => item.id == selecteditem).comments}
          updatefeedback={(prop) => updatefeedback({ ...feedbacks.find(item => item.id == selecteditem), ...prop })}
          setPreviewShow={setPreviewShow}
          setShow={setShow}
        >
          <Feedback
            data={feedbacks.find(item => item.id == selecteditem)}
            toggleUpvote={() => toggleUpvote(feedbacks.find(item => item.id == selecteditem).id)}
            setSelecteditem={() => {
              setSelecteditem(feedbacks.find(item => item.id == selecteditem).id)
              setPreviewShow(true)
            }}
          />
        </Commentsviewer>
        :

        showColumnView ?
          <ColumnView
            feedbacks={feedbacks}
            setshowColumnView={setshowColumnView}
            toggleUpvote={toggleUpvote}
            setShow={setShow}
          />
          :
          <div className="display">
            <Leftcontainer
              selected={selected}
              setSelected={setSelected}
              setshowColumnView={setshowColumnView}
              feedbacks={feedbacks}
            />
            <div className="rightcontainer">
              <Blueheader show={show} setShow={setShow} num={filtered.length} sorted={sorted} setSorted={setSorted} />
              {
                filtered.length ?
                  filtered.map((item, index) => <Feedback key={item.id} data={item} toggleUpvote={() => toggleUpvote(item.id)} setSelecteditem={() => {
                    //debugger
                    setSelecteditem(item.id)
                    setPreviewShow(true)
                  }} />)

                  :
                 <Emptyfeedback
                   setShow ={setShow}

       />

              }

            </div>
          </div>

  );
}


