
 

export default function Card ({data, toggleUpvote}) {
     return (
         <div className = "card"> 
         <div className= "line"></div>
         <div className ="statuscard">{data.status}</div>
          <div className ="cardcontainer">
{data.description}
         </div>
         <div className ="categorycard">{data.category}</div>
         <div className ="upvcardandcomments">
         <div className="rating" onClick={()=> toggleUpvote(data.id)} style={{ background: data.voted ? '#4661E6' : '#CFD7FF' }}>
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
         <div className="number-fb">{data.comments?data.comments.length:0}</div>
      </div>
         </div>
     )
 }



