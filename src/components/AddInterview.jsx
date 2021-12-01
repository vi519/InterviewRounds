import React, { useState } from "react";

import "../components/style/style3.css";
import Questions from "./Questions.jsx";
import axios from "axios";

function AddInterview() {
  let n = 0;
  const url = `https://allinterviewrounds.herokuapp.com/interviews`;
  const [data, setData] = useState([
    {
      name: "",
      company: "",
      interview: "",
      rounds: "",
      designation: "",
      descriptions: "",
      tips: "",
      connect: "",
    },
  ]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    console.log(data);
  };

  const [questions, setQuestions] = useState([{ question: "" }]);

  let handleChangeQuestion = (i, e) => {
    let newFormValues = [...questions];
    newFormValues[i][e.target.name] = e.target.value;
    setQuestions(newFormValues);
    console.log(questions[n].question);
  };

  let addQuestionFields = () => {
    setQuestions([...questions, { question: "" }]);
    n++;
  };

  let removeQuestionFields = (i) => {
    let newFormValues = [...questions];
    newFormValues.splice(i, 1);
    setQuestions(newFormValues);
    n--;
  };

 function handleReset(){
    setData({
      name: "",
      company: "",
      interview: "",
      rounds: "",
      designation: "",
      descriptions: "",
      tips: "",
      connect: "",
    },)

    setQuestions([{ question: "" }])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        company: data.company,
        rounds: data.rounds,
        designation: data.designation,
        questions: questions.map((i) => i.question),
        description: data.descriptions,
        interviewFor:data.interview,
        tips: data.tips,
        connectwith: data.connect,
      }),
    };
   await fetch(url, requestOptions)
      .then((response) => {
        alert("Thank You For Your Response")
        setData({
          name: "",
          company: "",
          interview: "",
          rounds: "",
          designation: "",
          descriptions: "",
          tips: "",
          connect: "",
        },)
    
        setQuestions([{ question: "" }])


        if (!response.ok) {
          throw new Error(response.statusText);

        }
        return  response.json();

     
       
      })
      .catch((err) => {
        console.log(err);
      });

      alert("Thanks for your respones")
  };

  // handle click event of the Add button

  return (
    <div>
      <div class="flex flex-col ">
        <div class="text-center px-4 text-4xl mt-10">
          {" "}
          <b>Share Your Interview</b>{" "}
        </div>
      
      </div>
      <div >
      <div class="flex  text-center justify-center  ">
     

        <form
          class="w-full max-w-lg mt-8 px-4 justify-center mb-4 "
          onSubmit={handleSubmit} 
        >
          <div class="flex flex-wrap -mx-3 mb-2 ">
            <div class="w-full md:w-1/2 px-2 mb-2 md:mb-0">
              <label 
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2 "
                for="grid-first-name"
              >
                Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={data.name}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div class="w-full md:w-1/2 px-2 mb-2">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Company Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Enter Company Name"
                name="company"
                value={data.company}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>
          <div class="relative mb-4">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Interview For:
            </label>
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              name="interview"
              placeholder="Interview for"
              value={data.interview}
              onChange={(e) => handleChange(e)}
              required
            >
              <option value="">Choose Option</option>
              <option value="Internship(OffCampus)">Internship (OffCampus)</option>
              <option value="Placement(OffCampus)">Placement (OffCampus)</option>
              <option value="Placement (OnCampus)">Placement (OnCampus)</option>
              <option value="Internship(OnCampus)">Internship (OnCampus)</option>
            </select>
          </div>

          <div class="flex flex-row justify-between">
            <div class="w-full md:w-1/2 mb-2 ">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Designation
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Enter Designation"
                name="designation"
                value={data.designation}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>

          <div class="flex flex-row justify-between">
            <div class="w-full md:w-1/2 mb-2 ">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Total Rounds
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                placeholder="Enter Rounds"
                name="rounds"
                value={data.rounds}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2 "
                for="grid-password"
              >
                Description of Process
              </label>
              <textarea
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder=""
                name="descriptions"
                placeholder="Write Description"
                value={data.descriptions}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2 ml-2"
            for="grid-last-name"
          >
            Questions Asked
          </label>
          {questions.map((element, index) => (
            <div className="form-inline" key={index}>
              <input
                class="block appearance-none w-80 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 ml-2 mb-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                type="text"
                name="question"
                value={element.question}
                onChange={(e) => handleChangeQuestion(index, e)}
                required
              />

              {index ? (
                <button
                  type="button"
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-2 border border-red-700 rounded ml-4"
                  onClick={() => removeQuestionFields(index)}
                >
                  Remove
                </button>
              ) : null}
            </div>
          ))}
          <div className="button-section">
            <button
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded ml-4 mb-6"
              type="button"
              onClick={() => addQuestionFields()}
            >
              Add More
            </button>

            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-white text-xs font-bold mb-2 "
                for="grid-password"
              >
                Any Tips
              </label>
              <textarea
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Enter Tips"
                name="tips"
                value={data.tips}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>

          <div class="w-full px-2">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2 "
              for="grid-password"
            >
              Connect with You ? (optional)
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Example: linkedin, facebook profile url"
              name="connect"
              placeholder="Share linkedIn profile or Insta to connect"
              value={data.connect}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div class="md:w-2/3 flex flex-row justify-around">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>

            <button
              class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default AddInterview;
