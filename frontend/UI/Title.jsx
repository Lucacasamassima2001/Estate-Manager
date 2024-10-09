import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.size || "1.5rem"};
  font-weight: ${(props) => props.weight || "normal"};
  margin: ${(props) => props.margin || "0"};
`;

export default Title;
