import { useState, useEffect } from "react";
import { ROUTES } from "./helper";

const HookPostSurvey = (callback, surveyId) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }

    fetch(ROUTES.POST_SURVEY_REPONSE(surveyId), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(inputs)
    })
      .then(response => {
        callback(response.ok);
        return response;
      })
      .catch(error => {
        console.err(error);
        callback(false);
      });
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

export default HookPostSurvey;
