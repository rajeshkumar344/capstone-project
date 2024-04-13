import React, { useEffect, useState } from 'react'
import "../App"
import { useParams } from 'react-router-dom'
import { bookDetailsUrl } from '../Api'


export default function BookDetails() {
    const [book,setbook] = useState({})
    const [loading,setLoading] = React.useState(false)
    const {id} = useParams()

    async function bookDetails(){
        setLoading(true)
        const response =await fetch(`${bookDetailsUrl}/${id}`)
        const data = await response.json()
        setbook(data)
        setLoading(false)
    }
 useEffect((id)=>{
    bookDetails()

 },[id])
 
    return (
    <div className='book-details'>
    
       {loading ? <div class="d-flex align-items-center">
                     <strong>Loading...</strong>
                     <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>       :
       
       <div className="card mb-3" style={{width: 540}}>
         <div className="row g-0">
           <div className="col-md-4">
             <img src={book?.image_url}  className="img-fluid  mt-5 ht -100%" alt="..."   />
             <p className="h3 "><small className="text-muted">Rating⭐ {book?.rating}</small></p>
             <p className="h3 "><small className="text-muted">Price ₹ {book?.num_pages}</small></p>
           </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-2xl font-bold">{book?.title}</h5>
            <p className="card-text">{book?.description}</p>
            <p className="h3"><small className="text-muted">Author -{book?.authors}</small></p>
            <p className="h4 "><small className="text-muted">Genres -{book?.genres}</small></p>
         </div>
       </div>
    </div>
  </div>

    }


    </div>
  )
}
