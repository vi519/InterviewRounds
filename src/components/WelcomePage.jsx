import React from "react";
import Particles from "react-particles-js";
import './style/style3.css'

//https://cdn.dribbble.com/users/1516183/screenshots/6121571/media/0d6fc28557e585d26ceb4edec3300f36.gif

function WelcomePage() {
  return (
    <div className="Welcome-Page" >
      <div style={{ position: "absolute" }}>
       
      </div>
      <div class="px-6 py-12 mt-20 ">
        <div class="text-6xl  inline-flex font-mono   ">
          Hi There
          <img
            src="https://c.tenor.com/xS_t2ANBv9UAAAAi/elsalla.gif"
            style={{ width: "8%" }}
            alt="loading..."
          />
        </div>

        <div class="text-4xl  pt-4 justify justify-around font-mono  ">
          I hope you doing great, Welcome to The Interview Round Website, This
          Web Application is designed and built for enhancing the interview
          experience of yours
        </div>
      </div>
<div class="mt-20 text-center font-black text-4xl">We Offer</div>
      <div class="mt-10 mx-6 my-6 mb-10 grid grid-cols-3 gap-2 justify-evenly">

      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://blog.capterra.com/wp-content/uploads/2019/07/HEAD-5_Things_to_Consider_when_Creating_a_Customer_Experience_Hero_no_text.png" alt="Sunset in the mountains"/>
 
  <div class="font-bold text-large tex-center px-2 py-2 ">Share Your Interview</div>
  <div class="px-2 py-2">

    <p class="text-gray-700 text-base">
  Share your Interview experience, so we all can learn from you
    </p>
  </div>
  </div>


  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://blog-assets.freshworks.com/hrms/wp-content/uploads/2018/09/Freshteam_Interview_Experience.png" alt="Sunset in the mountains"/>

  <div class="font-bold text-large tex-center px-2 py-2 ">See The Interview Experience</div>

  <div class="px-2 py-2">
   
    <p class="text-gray-700 text-base">
See the other people interview to enhance your knowlegde 
    </p>
  </div>
  </div>

  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full max-h-40" src="https://kcrecruitment.com/wp-content/uploads/2019/08/Passive-Candidate-min.jpg" alt="Sunset in the mountains"/>
 
  <div class="font-bold text-large tex-center px-2 py-2 ">See The Company Listing</div>
  <div class="px-2 py-2">
    
    <p class="text-gray-700 text-base">
See different company of any kind, we accept all kind interviews in our website 
    </p>
  </div>
  </div>

  
      </div>
     
    </div>
  );
}

export default WelcomePage;
