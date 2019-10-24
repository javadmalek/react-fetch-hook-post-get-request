import React, { useState } from "react";
import { FlexboxDiv, TextSpan } from "./layouts.js.jsx";
import dateFormat from "dateformat";
import { DATE_FORMAT, DATE_FORMAT_HMS } from "./helper";
import styled from "styled-components";
import Collapsible from "react-collapsible";

const survey = ({ id, title, tagline }, index) => {
  // const [questions, setQuestions] = useState([]);

  const onOpen = () => {};

  return (
    <FlexboxDiv key={`${index}-${id}`} paddingDefault>
      <Collapsible trigger={title}>
        <FlexboxDiv
          flexDirection="column"
          alignItems="center"
          whiteBg
          borderRadius
        >
          {tagline}
        </FlexboxDiv>
      </Collapsible>
    </FlexboxDiv>
  );
};

const Surveys = ({ surveys }) => {
  console.log(surveys);
  if (!surveys || surveys.length === 0) return null;

  const list = surveys.map(survey);
  return <FlexboxDiv flexWrap="wrap">{list}</FlexboxDiv>;
};

export default Surveys;
