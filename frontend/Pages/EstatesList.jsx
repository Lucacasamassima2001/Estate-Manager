import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Estate } from "../components/Estate";
import Flex from "../UI/Flex";

export const EstatesList = () => {
  const [estates, setEstates] = useState([]);
  // fetch data
  useEffect(() => {
    fetch("http://localhost:3000/estates")
      .then((response) => response.json())
      .then((data) => setEstates(data.estates));
  }, []);
  return (
    <>
      <Flex direction="column" gap="5rem">
        <Header />
        <Flex
          padding="1rem"
          wrap="wrap"
          align="center"
          justify="center"
          gap="2rem"
        >
          {estates.map((estate) => (
            <Estate key={estate.id} estate={estate} />
          ))}
        </Flex>
      </Flex>
    </>
  );
};
