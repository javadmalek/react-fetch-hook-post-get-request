import React, { useState, useEffect } from "react";
import Header from "./header.js";
import Surveys from "./surveys.js";

const ContainerSurveys = ({ fetchedSurveys }) => {
  const [surveys, setSurveys] = useState(fetchedSurveys);

  useEffect(() => {
    setSurveys(fetchedSurveys);
  }, [fetchedSurveys]);

  return (
    <div>
      <Header />
      <Surveys surveys={surveys} />
    </div>
  );
};

export default ContainerSurveys;
