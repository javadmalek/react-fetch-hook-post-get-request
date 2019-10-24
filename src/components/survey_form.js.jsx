import React, { useState, useEffect } from "react";
import { FlexboxDiv } from "./layouts.js.jsx";
import HookPostSurvey from "./hook_post_survey.js";

const SurveyForm = ({ fetcchedSurveyDetails, surveyId }) => {
  const callbackAlert = isSaved => alert(isSaved ? "Saved!" : "Failed!...");

  const [surveyDetails, setSurveyDetails] = useState(
    fetcchedSurveyDetails ? fetcchedSurveyDetails.survey : {}
  );
  const { inputs, handleInputChange, handleSubmit } = HookPostSurvey(
    callbackAlert,
    surveyId
  );

  useEffect(() => {
    setSurveyDetails(fetcchedSurveyDetails ? fetcchedSurveyDetails.survey : {});
  }, [fetcchedSurveyDetails]);

  const questions = surveyDetails.questions.map((question, indexQuestion) => (
    <FlexboxDiv key={indexQuestion} flexDirection="column" paddingBS>
      <label>{question.title}</label>
      {question.options.map((option, indexOption) => (
        <FlexboxDiv key={indexOption} paddingBS>
          <input
            key={indexOption}
            type="radio"
            id={`${question.id}-${indexOption}`}
            name={question.id}
            value={option}
            onChange={handleInputChange}
          />
          <label htmlFor={`${question.id}-${indexOption}`}>{option}</label>
        </FlexboxDiv>
      ))}
    </FlexboxDiv>
  ));

  return (
    <FlexboxDiv flexDirection="column" paddingDefault>
      <form onSubmit={handleSubmit}>
        {questions}
        <button type="submit">Save</button>
      </form>
    </FlexboxDiv>
  );
};
export default SurveyForm;
