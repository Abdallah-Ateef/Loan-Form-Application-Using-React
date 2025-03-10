import { useState } from "react"
import '../components/loanform.css'
import Modal from "./Modal"

export default function Loanform(){
    const[showmodel,setshowmodel]=useState(false)
    const[loaninput,setloaninputs]=useState({name:'',phonenum:'',age:'',isemployee:false,salary:''})
    function handleformsubmit(event){
        event.preventDefault();
        setshowmodel(true);
    }
    function handleshowmodel(){
        if(showmodel){
            setshowmodel(false)
        }
    }
   
    let bttndisable=loaninput.name==''||loaninput.age==''||loaninput.phonenum=='';

    return(
        <div className="loanform flex" onClick={handleshowmodel}>
            <form className="loanform__form flex" >
            <h1>Requesting To Loan</h1>
            <hr></hr>
            <label>Name:</label>
            <input type="text" value={loaninput.name} onChange={(e)=>setloaninputs({...loaninput,name:e.target.value})}></input>
            <label>Phone Number:</label>
            <input type="text" value={loaninput.phonenum} onChange={(e)=>setloaninputs({...loaninput,phonenum:e.target.value})}></input>
            <label>Age:</label>
            <input type="text" value={loaninput.age} onChange={(e)=>setloaninputs({...loaninput,age:e.target.value})}></input>
            <label className="loanform__checkbox">Are You Employee?</label>
            <input type="checkbox" value={loaninput.isemployee} checked={loaninput.isemployee} onChange={(e)=>setloaninputs({...loaninput,isemployee:e.target.checked})}></input>
            <select value={loaninput.salary} onChange={(e)=>setloaninputs({...loaninput,salary:e.target.value})}>
                <option>less than 500$</option>
                <option>between 500$ and 2000$</option>
                <option>above 2000$</option>
            </select>
            <button type="submit" className="loanform__bttn" id={bttndisable?'disable':''} disabled={bttndisable} onClick={handleformsubmit}>Submit</button>
            </form>
            <Modal isvisible={showmodel} ></Modal>
            

        </div>
        
    )
}