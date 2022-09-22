
export default function Blueheader({show, setShow,num, sorted, setSorted}) {

    return (
        <div className="blueheader">
            <img src="bulb 2.png" />
            <div className="texttoprc">
                <div className="suggestion">{num} Suggestions</div>
                <div className="sortby">
                    <select  
                    value ={sorted}
                    onChange={(event)=>setSorted(event.target.value)}>
                        <option value=''>- select sorting - </option>
                        <option value='Most Upvotes'>Most Upvotes</option>
                        <option value='Least Upvotes'>Least Upvotes</option>
                        <option value='Most Comments'>Most Comments</option>
                        <option value='Least Comments'>Least Comments</option>
                        </select>
                </div>
                <button className="addfeedback" onClick={()=>setShow(true)}>+ Add Feedback</button>
            </div>
        </div>
    )
}