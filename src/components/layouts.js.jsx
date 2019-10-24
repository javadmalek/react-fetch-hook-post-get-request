import styled from "styled-components";

export const FlexboxDiv = styled.div`
    width: 100%;    
    display: flex;
    ${({
      flexDirection = "row",
      alignItems = "flex-start",
      justifyContent = "flex-start",
      flexWrap = "nowrap",
      flexGrow = 1,
      flexBasis
    }) => `
        align-items:${alignItems};
        justify-content:${justifyContent};
        flex-direction:${flexDirection};
        flex-wrap:${flexWrap};
        flex-Basis:${flexBasis};
        flex:${flexGrow};
    `}

    ${({ whiteBg }) => whiteBg && "background: white;"}
    ${({ ghostWhiteBg }) => ghostWhiteBg && "background: ghostwhite;"}
    ${({ borderRadius }) => borderRadius && "border-radius: 0.25em;"}
    ${({ paddingDefault }) => paddingDefault && "padding: 1em;"}
    ${({ w30 }) => w30 && "min-width: 30%;"}
    ${({ widthAuto }) => widthAuto && "width: auto;"}
    
    @media (max-width: 768px) {
        min-width: 90%;
    }
`;

export const TextSpan = styled.span`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;

    ${({ marginRDefault }) => marginRDefault && "margin-right: 1em;"};
    ${({ paddingS }) => paddingS && "padding: 0.5em;"}
    ${({ linkLike }) =>
      linkLike &&
      `
        color: cornflowerblue;
        cursor: pointer;
        :hover { color: blue; }
    `}
    ${({ isActive }) => isActive && "color: blue;"}
    ${({ fontM }) => fontM && "font-size: 1.5rem;"}
    ${({ fontL }) => fontL && "font-size: 2rem;"}
    ${({ bold }) => bold && "font-weight: 500;"}
    
    @media (max-width: 768px) {
        ${({ marginRDefault }) => marginRDefault && "margin-right: 0.5em;"}  
    }
`;
