import { useEffect, useState } from "react";
import "../src/App.css";
import Header from "../Components/Header";
function Home() {
  const [estates, setEstates] = useState([]);

  // fetch data
  useEffect(() => {
    fetch("http://localhost:3000/estates")
      .then((response) => response.json())
      .then((data) => setEstates(data));
  }, []);
  console.log(estates);

  return (
    <>
      <Header />
    </>
  );
}

export default Home;
