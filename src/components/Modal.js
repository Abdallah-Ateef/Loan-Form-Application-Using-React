import '../components/Modal.css';

export default  function Modal({isvisible,errormsg=null}){
    if(isvisible){
        return(
            <div className="modal">
                <div className="modal__content">
                    {/* <h1>The form has been submited successfully</h1> */}
                    <h1 style={{color:errormsg?"red":'green'}}>{errormsg?errormsg:"The form has been submited successfully"}</h1>
                </div>
            </div>
        )

    }
    else return<></>

}