
export default function Feedback({ data, toggleUpvote, setSelecteditem }) {
  return (
    <div className ="feedbackcontainer" onClick ={setSelecteditem}>
      <div className='flex'>
    
        <div className="rating" onClick={toggleUpvote} style={{ background: data.voted ? '#4661E6' : '#CFD7FF' }}>
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.14111 6L5.09381 2L9.0465 6"
              stroke="#4661E6"
              strokeWidth="2"
            />
          </svg>
          <div className="numberratings">{data.upvotes}</div>
        </div>
        <div className="rightside-fb">
          <div className="textfeedbacktitle">{data.title}</div>
          <div className="context-fb">{data.description}</div>
          <div className="status-fb">{data.category}</div>
        </div>
      </div>
      {data.comments &&
        <div className="flex">
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE" />
          </svg>
          <div className="number-fb">{data.comments.length}</div>
        </div>}
    </div>
  )
}