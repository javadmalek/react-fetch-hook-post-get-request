import React, { Fragment, useState, useEffect } from "react";

const useSurveyFormHook = callback => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

const SurveyForm = ({ fetcchedSurveyDetails }) => {
  const [surveyDetails, setSurveyDetails] = useState(
    fetcchedSurveyDetails ? fetcchedSurveyDetails.survey : {}
  );

  useEffect(() => {
    setSurveyDetails(fetcchedSurveyDetails ? fetcchedSurveyDetails.survey : {});
  }, [fetcchedSurveyDetails]);

  const callbackAlert = () => {
    alert(`User Created!
        Name: ${inputs.firstName} ${inputs.lastName}
        Email: ${inputs.email}`);
  };
  const { inputs, handleInputChange, handleSubmit } = useSurveyFormHook(
    callbackAlert
  );

  console.log("surveyDetails >>>", surveyDetails);

  const makeRadioOption = (questionId, option, indexOption) => {
    console.log("questionId >>", questionId);
    return (
      <Fragment key={`${questionId}-${indexOption}`}>
        <input
          key={indexOption}
          type="radio"
          name={questionId}
          value={option}
        />{" "}
        {option}
      </Fragment>
    );
  };

  const questions = surveyDetails.questions.map((question, indexQuestion) => (
    <div key={indexQuestion}>
      <label>{question.title}</label>
      {question.options.map((option, indexOption) =>
        makeRadioOption(question.id, option, indexOption)
      )}
    </div>
  ));

  return (
    <form onSubmit={handleSubmit}>
      <div>{surveyDetails.tagline}</div>
      {questions}
      <button type="submit">Save</button>
    </form>
  );
};
export default SurveyForm;
