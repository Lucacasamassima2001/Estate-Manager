import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.size || "1.5rem"};
  font-weight: ${(props) => props.weight || "normal"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  cursor: pointer;
`;

export default Button;
