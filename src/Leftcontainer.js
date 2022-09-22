import FilterByStatus from "./FilterByStatus"



export default function Leftcontainer({ selected, setSelected, setshowColumnView, feedbacks }) {
    return (

        <div className="leftcontainer">
            <div className="topbox">
                <div className="title">
                    Frontend Mentor
                    <div className="undertitle">Feedback Board</div>
                </div>
            </div>
            <div className="middlebox">
                <FilterByStatus selected={selected} setSelected={setSelected} />
                {/* <div className="options">
            <div className="status-fb active">All</div>
            <div className="status-fb" onClick = ()>UI</div>
            <div className="status-fb">UX</div> */}

                {/* <div className="status-fb">Enchancement</div>
                <div className="status-fb">Bug</div>
                <div className="status-fb">Featured</div> */}

            </div>
            <div className="bottombox">
                <div className="titlebottombox">
                    <div className="nameroadmap" onClick = {()=> setshowColumnView(true)}>Roadmap</div>
                    <div className="view">View</div>
                </div>
                <ul>
                {Object.entries(feedbacks.reduce((mem, feedback) => {
        if (!(feedback.status in mem)) {
            mem[feedback.status] = []
        }
        mem[feedback.status].push(feedback)
        return mem
    }, {})). map(([key, value])=> <li key={key} className="line1">
 {key}
    <div className = 'valuenum'>{value.length}</div></li>)   }
                    
                </ul>
            </div>
        </div>

    )
}