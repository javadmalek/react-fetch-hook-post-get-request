import React from "react";
import { FlexboxDiv } from "./layouts.js";
import styled from "styled-components";

const H1 = styled.h1`
  padding: 0 1em;
`;

const Header = () => {
  return (
    <FlexboxDiv flexDirection="column" alignItems="center">
      <H1>List of Surveys</H1>
    </FlexboxDiv>
  );
};

export default Header;
