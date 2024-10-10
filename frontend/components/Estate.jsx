import Flex from "../UI/Flex";
import Image from "../UI/Image";
import { LinkButton } from "../UI/LinkButton";
import Paragraph from "../UI/Paragraph";
import Title from "../UI/Title";

/* eslint-disable react/prop-types */
export const Estate = ({ estate }) => {
  console.log(estate);
  return (
    <Flex
      border="1px solid black"
      borderRadius="5px"
      width="600px"
      direction="column"
    >
      <Title>
        {estate.name} - {estate.location}
      </Title>
      <Image src="../public/banner.jpeg" alt="" />
      <Paragraph>{estate.description}</Paragraph>
      <LinkButton to={`/estates/${estate.id}`}>View Details</LinkButton>
    </Flex>
  );
};
