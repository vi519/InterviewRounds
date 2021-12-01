import React, { useState, useEffect } from 'react'
import FadeLoader
from "react-spinners/FadeLoader";
import "../App.css"
import { Route ,Link} from "react-router-dom";



function ViewInterview() {

  const [data, setData]= useState(null)
  const [loading,setLoading]= useState(false)

  
useEffect(()=>{
  setLoading(true)
  getInterviewList();
},[])

const getInterviewList =async () => {

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
 const response= await fetch(`https://allinterviewrounds.herokuapp.com/interviews`, requestOptions);
 const json = await response.json();

 setData(json);
setLoading(false)

    

 
};
  
    return (
    <div class="mt-10 ">
       {
        loading? 
        <div  class="flex flex-wrap justify-center mt-52" >

        <FadeLoader  color="black" loading={loading}  size={300} /> </div>
        
        
        :



<div >
{data && data.map(person=>(
  
  <>
  <div class="flex  flex-col justify-between  text-xl mb-6">
    <div class="w-full  rounded overflow-hidden shadow-lg flex flex-col  px-3 py-2 mb-4 bg-yellow-400 ">
    <div class="grid grid-cols-1 gap-8 text-center">
      <div>
      <label class="text-2xl text-black-200" > Name: </label>
 <p class="text-white mb-2">{person.name}</p>
      </div>
      <div>
      <label class="text-2xl text-black-200" > Company:  </label>
  <p class="text-white mb-2"> {person.company}</p>
      </div>
   

     
      <div>
      <label class="text-xl text-black-200" > Interview For:  </label>
  <p class="text-white mb-2"> {person.interviewFor}</p>
      </div>
      



<div>




<label class="text-2xl text-black-200" >  Designation:  </label>
 <p class="text-white mb-2"> {person. designation}</p>
</div>
 <div>
 <label class="text-2xl text-black-200" >  Rounds:  </label>
  <p class="text-white mb-2"> {person.rounds}</p>
 </div>
 <div>
 <label class="text-2xl text-black-200"> 
     Questions On: </label>
   {
     person && person.questions.map(set=>( 
     <>
     <p class="text-white mb-2"> {set}</p></>))
   }

 </div>

<div>
<label class="text-2xl text-black-200" > Description:  </label>
  <p class="text-white mb-2"> {person.description}</p>
</div>

<div>
<label class="text-2xl text-black-200" > Tips:  </label>
 <p class="text-white mb-2"> {person.tips}</p>
</div>

<div>
<label class="text-2xl text-black-200" > Connect With Me:  </label>
   <p class="text-white mb-2"> <a href={person.connectwith}> {person.connectwith}</a>
</p>
</div>
  
  </div>

  </div>
  </div>
   
  </>

))}

</div>
}
    </div>
    
    )
}

export default ViewInterview
