import { useState } from "react"
import '../components/loanform.css'
import Modal from "./Modal"
export default function Loanform(){
    return(
        <div className="loanform flex">
            <form className="loanform__form flex">
            <h1>Requesting To Loan</h1>
            <hr></hr>
            <label>Name:</label>
            <input type="text"></input>
            <label>Phone Number:</label>
            <input type="number"></input>
            <label>Age:</label>
            <input type="text"></input>
            <label className="loanform__checkbox">Are You Employee?</label>
            <input type="checkbox"></input>
            <select>
                <option>less than 500$</option>
                <option>between 500$ and 2000$</option>
                <option>above 2000$</option>
            </select>
            <button type="submit" className="loanform__bttn">Submit</button>
            </form>
            {/* <Modal></Modal> */}
            

        </div>
        
    )
}