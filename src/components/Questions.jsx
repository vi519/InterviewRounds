import React, { useState } from "react";

const Questions = () => {
  const [questions, setQuestions] = useState([{ question: "", }]);

  let handleChangeQuestion = (i, e) => {
    let newFormValues = [...questions];
    newFormValues[i][e.target.name] = e.target.value;
    setQuestions(newFormValues);
  };

  let addQuestionFields = () => {
    setQuestions([...questions, { name: "", email: "" }]);
  };

  let removeQuestionFields = (i) => {
    let newFormValues = [...questions];
    newFormValues.splice(i, 1);
    setQuestions(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(questions));
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((element, index) => (
        <div className="form-inline" key={index}>
      
          <input
          class="block appearance-none w-80 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 ml-4 mb-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
            type="text"
            name="name"
            value={element.name || ""}
            onChange={(e) => handleChangeQuestion(index, e)}
          />
         
          {index ? (
            <button
              type="button"
              className="button remove"
              onClick={() => removeQuestionFields(index)}
            >
              Remove
            </button>
          ) : null}
        </div>
      ))}
      <div className="button-section">
        <button
          className="button add"
          type="button"
          onClick={() => addQuestionFields()}
        >
          Add
        </button>
        <button className="button submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Questions;
