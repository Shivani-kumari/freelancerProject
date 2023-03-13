
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';


function App() {
  const [mobileList,setMobileList] = useState([])
  const [list,setList] = useState([])
  const [search,setSerch] = useState("")
  useEffect(()=>{
    fetchApiCall()
  },[])
  const  fetchApiCall = async()=>{
   const res =  await axios.get("http://localhost:3000/mobile")
   console.log(res.data)
   setMobileList(res.data)
   setList(res.data)
  }
  const onSearch = (e)=>{
setSerch(e.target.value)
if(!e.target.value.trim().length){
  fetchApiCall()
}else{
  console.log(e.target.value)
  const newArrayList =  list.filter(item => item.price.includes(e.target.value.trim()))
  
  setMobileList(newArrayList)
}
  }
  
  return (
    <div className='App'>
      <div className="search">
     Price Search <input type="search" placeholder='Search' onChange={onSearch} />
      </div>
 
   <div className='container'>
    {mobileList.length && mobileList.map((data)=>{
      return <div key={data.id} className="card">
        <img src={data.image} width="300px" height="300px"/>
      <p>Price ₹{data.price}</p>
      <p>Name {data.name}</p>
      <p>Ram {data.ram}</p>
      <p>Display {data.display}</p>
        
         
       
      </div>
    })}
   </div>   
   </div>
  );
}

export default App;
