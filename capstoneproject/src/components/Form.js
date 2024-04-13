import React from 'react'
import "../App"

export default function Form() {
    const [formDetails,setFormDetails] =React.useState({
        name :"",
        phoneNumber :"",
        email :  "",
        city :"",
        state :"",
        address : "",
        
    })

    const formsubmitted = (e)=>{
        e.preventDefault()
        console.log("Transaction Details",formDetails)

    }
  return (
    <div className='formmain'>

        <div className='form'>
        <form className="row g-3 needs-validation" >
          <div className="col-md-4">
             <label for="name" className="form-label">Name</label>
             <input type="text" className="form-control"  id="name" required 
             onChange={(e)=>setFormDetails({...formDetails,name:e.target.value})}/>
            
         </div>
        <div className="col-md-4">
           <label for="validationCustom02" className="form-label">Phone number</label>
          <input type="number" className="form-control"  required
          onChange={(e)=>setFormDetails({...formDetails,phoneNumber:e.target.value})} />
         <div className="valid-feedback">
                     Looks good!
            </div>
         </div>
            <div className="col-md-4">
              <label for="validationCustomUsername" className="form-label">email</label>
           <div className="input-group has-validation">
             <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required
            onChange={(e)=>setFormDetails({...formDetails,email:e.target.value})}/>
           <div className="invalid-feedback">
                  Please choose a username.
           </div>
          </div>
        </div>
            <div className="col-md-6">
                <label for="validationCustom03" className="form-label">City</label>
               <input type="text" className="form-control" id="validationCustom03" required
               onChange={(e)=>setFormDetails({...formDetails,city:e.target.value})}/>
            <div className="invalid-feedback">
                Please provide a valid city.
              </div>
           </div>
           <div className="col-md-3">
               <label for="validationCustom04" className="form-label">State</label>
               <input type="text" className="form-control" id="validationCustom03" required
               onChange={(e)=>setFormDetails({...formDetails,state:e.target.value})}/>
             <div className="invalid-feedback">
                Please select a valid state.
             </div>
           </div>
         <div className="col-md-3">
           <label for="validationCustom05" className="form-label">Location</label>
           <input type="text" className="form-control" id="validationCustom05" required 
            onChange={(e)=>setFormDetails({...formDetails,address:e.target.value})}/>
         <div className="invalid-feedback">
              Please provide a valid zip.
          </div>
           </div>
           <div > 
            <label for="validationCustomer06" className='form-label '>Payment mode </label>
            <select className='m-2 '>
                <option value="phone pe">Phone pe</option>
                <option value="google pe">Google pe</option>
                <option value="Atm card">ATM card</option>
                <option value="Debit card">Debit Card</option>
            </select>
           </div>
          <div className="col-12">
         <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label className="form-check-label" for="invalidCheck">
                   Agree to terms and conditions
         </label>
         <div className="invalid-feedback">
                   You must agree before submitting.
        </div>
        </div>
         </div>
         <div className="col-12">
 
          <button className="btn btn-primary" type="submit"onClick={formsubmitted}>Proceed for Transaction💰</button>          
         
        </div>
      </form>
         </div>

    </div>
  )
}
