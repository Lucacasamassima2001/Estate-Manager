import styled from "styled-components";

export const Paragraph = styled.p`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.size || "1.5rem"};
  font-weight: ${(props) => props.weight || "normal"};
  margin: ${(props) => props.margin || "0"};
  white-space: ${(props) => props.whiteSpace || "normal"};
`;

export default Paragraph;
