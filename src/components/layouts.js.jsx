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
    ${({ borderRadius }) => borderRadius && "border-radius: 0.25em;"}
    ${({ paddingDefault }) => paddingDefault && "padding: 1em;"}
    ${({ paddingBS }) => paddingBS && "padding-bottom: 0.5em;"}
    
    @media (max-width: 768px) {
        min-width: 90%;
    }
`;

export const TextSpan = styled.span`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;

    ${({ paddingDefault }) => paddingDefault && "padding: 1em;"}
    ${({ fontM }) => fontM && "font-size: 1.5rem;"}
    ${({ bold }) => bold && "font-weight: 500;"}
`;
