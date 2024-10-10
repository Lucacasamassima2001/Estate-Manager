import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Flex from "../UI/Flex";
import Title from "../UI/Title";
import Image from "../UI/Image";

export const EstateDetails = () => {
  const [estate, setEstate] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/estates/${id}`)
      .then((response) => response.json())
      .then((data) => setEstate(data[0]));
  }, []);
  console.log(estate);
  return (
    <>
      <Flex direction="column">
        <Title>{estate?.name}</Title>
        <Image width="600px" src={"../public/banner.jpeg"} alt="" />
      </Flex>
    </>
  );
};

export default EstateDetails;
