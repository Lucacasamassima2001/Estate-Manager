import styled from "styled-components";

const Image = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  object-fit: ${(props) => props.objectFit || "cover"};
  object-position: ${(props) => props.objectPosition || "center"};
  border-radius: ${(props) => props.borderRadius || "0"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  border: ${(props) => props.border || "none"};
`;

export default Image;
