import React, { useEffect } from 'react'
import "../App";
import { ApiUrl } from '../Api';
import { useAppContext } from './context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function Booklist() {
    const [books,setBooks] = React.useState([])
    const [loading,setLoading] = React.useState(false)
    const [searchTearm, setSearchterm]=React.useState("")
    const [filteredProducts,setFilteredproducts]=React.useState(books) 

    const { favorites,addTocart,removeFromcart } =useAppContext();
    console.log("my favorites are",favorites)

    const navigate = useNavigate()

    const checkingFavorites =(id) => {
        const info = favorites.some((book) => book.id === id)
        return info
    }

    async function fetchBooks(){
        setLoading(true)
        const response =await fetch(ApiUrl)
        const data =await response.json()
        setFilteredproducts(data)       
        console.log(data)
        setLoading(false)

  }
  useEffect(()=>{
    fetchBooks()
  },[])

  useEffect(()=>{
    const result =filteredProducts.filter((product)=>   
    product.title.toLowerCase().includes(searchTearm.toLowerCase())
   
    )
    setFilteredproducts(result)
    

  },[searchTearm])

  return (
    <div>
      <div className='searchbox'>
         <input className="form-control me-2 ml-80 w-50 mt-2" type="search" placeholder="Search" aria-label="Search" 
                        value={searchTearm} onChange={(e)=>{setSearchterm(e.target.value)}} /> 
      </div>
    <div className='book-list' >  

        { loading ? 
        
                 <div class="d-flex align-items-center ml-10">
                     <strong>Loading...</strong>
                     <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                 </div>
        
        :  filteredProducts.map((book)=>{
        return  (       

           <div className="card" style={{width:300,margin:40,padding:12,}}>
                <img  onClick={()=>navigate(`/books/${book.id}`)} src={book.image_url} 
                   className="card-img-top  transition duration-500 ease-in-out  hover:-translate-y-1 hover:scale-110  " alt="..."/>
               <div className="card-body">
                    <h5 className="card-title text-2xl font-bold">{book.title}</h5>
                    <span className='font-bold'>₹ {book.num_pages}</span>
                   
                {checkingFavorites(book.id)?
                   <button onClick={()=>removeFromcart(book.id)}  type="button" class="btn btn-primary btn-lg w-full mt-6">Remove from cart</button>
                :<button onClick={()=>addTocart(book)}  type="button" class="btn btn-primary btn-lg w-full mt-6">Add to cart</button>
                }
                    
               </div>
           </div>
        )
        })   

 }
               
</div>
</div>         
  )
}
