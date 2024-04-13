import React from 'react'
import "../App"
import { useAppContext } from './context/AppContext';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

export default function Addtocart() {
  const navigate = useNavigate()
   
    const { favorites,addTocart,removeFromcart,setFavorites} =useAppContext();
    console.log("my favorites are",favorites)
       
    const checkingFavorites =(id) => {
        const info = favorites.some((book) => book.id === id)
        
        return info
    }
   const  calculateTotal = ()=>{
    return  favorites.reduce((total,item)=>{
     const amount =  total+ item.num_pages
     console.log("amount",amount)
     const Tamount = amount*item.quantity
     console.log("final amount",Tamount)
     return Tamount
    },0)
   }
   const handleQuantityChange = (e,id)=>{
    const newQuantity=parseInt(e.target.value)
    const newcartItems =favorites.map(book=>{
      if(book.id ===id){       
        return {...book,quantity:newQuantity}
      }
      return book  
    
    })
   setFavorites(newcartItems)
   console.log("heyy",newQuantity)
   }
  const formDetails = ()=>{
    navigate("/form")
  }
    

  return (
    <div className='addtocart'>
      <div className='payment'>
      <p className='font-bold   gap-15'>Total Amount ={calculateTotal()} </p>    
       <button  className='btn btn-primary btn-sm' onClick={formDetails}>Proceed for payment</button>
      </div>
       {favorites.length > 0 ? favorites.map((book)=>{
        return  (  
               
            <div className="card" style={{width:250,margin:40,padding:12}}>
                <img src={book.image_url} className="card-img-top  transition duration-500 ease-in-out  hover:-translate-y-1 hover:scale-110  " alt="..."/>
              <div className="card-body">
                    <h5 className="card-title text-2xl font-bold">{book.title}</h5>
                    <div className='flex gap-20'>
                    <span className='font-bold'>₹ {book.num_pages}</span>
                    <select value={book.quantity} onChange={(e)=>handleQuantityChange(e,book.id)}>
                      {[...Array(10).keys()].map(n=>{
                      return  <option key={n+1} value={n+1}>{n+1}</option>
                      })}
                    </select>
                    </div>
                   
                {checkingFavorites(book.id)?
                   <button onClick={()=>removeFromcart(book.id)}  type="button" class="btn btn-primary btn-lg w-full mt-6">Remove from cart</button>
                :<button onClick={()=>addTocart(book)}  type="button" class="btn btn-primary btn-lg w-full mt-6">Add to cart</button>
                }             
                    
               </div>
               
               </div>
              
        )
        }) 
        
        :<p className="card-title text-2xl font-bold align-center text-red-500 font-serif mt-8"> your cart is empty  </p>     
         
          
        } 

    </div>
  )
}
