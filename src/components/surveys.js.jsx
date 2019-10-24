import React, { Fragment, useState, useEffect } from "react";
import { FlexboxDiv, TextSpan } from "./layouts.js.jsx";
import dateFormat from "dateformat";
import { DATE_FORMAT, DATE_FORMAT_HMS } from "./helper";
import styled from "styled-components";
import Collapsible from "react-collapsible";
import { ROUTES } from "./helper";
import HookFetch from "./hook_fetch.js";
import SurveyForm from "./survey_form.js";

const Survey = ({ id, title, tagline }) => {
  const fetcchedSurveyDetails = HookFetch(ROUTES.FETCH_SURVEY_QUESTIONS(id));
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // fetchedSurvey && setQuestions(fetchedSurvey.questions);
  }, [showForm]);

  const onOpen = () => {
    setShowForm(true);
  };

  const titleSpan = (
    <TextSpan fontM bold>
      {title}
    </TextSpan>
  );
  return (
    <FlexboxDiv paddingDefault flexDirection="column">
      <Collapsible trigger={titleSpan} onOpen={onOpen}>
        <FlexboxDiv flexDirection="column" whiteBg borderRadius>
          <TextSpan bold paddingDefault>
            {tagline}
          </TextSpan>
          {showForm && (
            <SurveyForm
              surveyId={id}
              fetcchedSurveyDetails={fetcchedSurveyDetails}
            />
          )}
        </FlexboxDiv>
      </Collapsible>
    </FlexboxDiv>
  );
};

const Surveys = ({ surveys }) => {
  if (surveys === undefined || !surveys || surveys.length === 0) return null;

  const list = surveys.map((survey, index) => (
    <Fragment key={`${index}-${survey.id}`}>
      <Survey {...survey} />
    </Fragment>
  ));
  return (
    <FlexboxDiv flexDirection="column" flexWrap="wrap">
      {list}
    </FlexboxDiv>
  );
};

export default Surveys;
