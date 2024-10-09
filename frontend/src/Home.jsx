import { useEffect, useState } from "react";
import "./App.css";
import Header from "../components/Header";

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
