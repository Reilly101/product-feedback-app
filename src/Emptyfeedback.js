import icon from './icon.svg'

export default function Emptyfeedback ({setShow}) {
    return (
<div className ="emptyscreen">
<div className ="centerbox">
<img src={icon} />
<div className='titleempty'>There is no feedback yet.</div>
<div className ='subtitle'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</div>
<button className="addfeedback" onClick={()=>setShow(true)}>+ Add Feedback</button>

</div>
</div>



    )
}