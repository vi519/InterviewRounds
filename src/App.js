import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Link
} from "react-router-dom";
import ViewInterview from './components/ViewInterview';
import WelcomePage from './components/WelcomePage';
import ViewCompany from './components/ViewCompany';
import AddInterview from './components/AddInterview';
import { useState ,useEffect} from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import Contact from './components/Contact';


function App() {

  const [loading, setLoading]= useState(false);

  useEffect(()=>{
setLoading(true)

setTimeout(()=>{
  setLoading(false)

},3000)
  },[])

  return (
    <div>
      {
        loading? 
        <div  class="flex flex-wrap justify-center mt-52" >

          <FadeLoader  color="black" loading={loading}  size={200} />

    
        </div>
        
        
        :
          <><Router>
            <nav class="flex items-center justify-between flex-wrap bg-pink-900 p-6" id="nav">
              <div class="flex items-center flex-shrink-0 text-white mr-6">
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <span class="font-semibold text-xl tracking-tight">
                  Interview Rounds</span>
              </div>

              <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                  <Link to="/InterviewRounds/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> <b>Home</b>
                  </Link>

                  <Link to="/InterviewRounds/addinterview" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">   <b>Add Interview</b>
                  </Link>


                  <Link to="/InterviewRounds/viewinterview" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    <b>View Interview</b>
                  </Link>
                  <Link to="/InterviewRounds/contactme" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    <b>Contact Me</b>
                  </Link>


                </div>

              </div>
            </nav>

            <Routes>
              <Route exact path="/InterviewRounds/" element={<App />, <WelcomePage />}></Route>
              <Route exact path="/InterviewRounds/addinterview" element={<AddInterview />}></Route>
              <Route exact path="/InterviewRounds/viewinterview" element={<ViewInterview />}></Route>
              <Route exact path="/InterviewRounds/contactme" element={<Contact />}></Route>



            </Routes>

          </Router>
          <footer class="w-full h-full px-6 py-6  text-white text-center text-3xl"> © Made by Vineet Mishra </footer></>
}


    </div>
  );
}

export default App;
