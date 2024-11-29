import React, { useEffect, useState } from "react";
import Equation2 from "../components/Equation2/Equation2";
import Header from "../components/Header/Header";
import Equation1 from "../components/Equation1/Equation1";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function EquationPage() {
  const [searchParams] = useSearchParams();
  const [arraysTogether, setArraysTogether] = useState([]);
  const [arrayAgainst, setArrayAgainst] = useState([]);
  const [loading, setLoading] = useState(true);

  const REACT_APP_API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;
  const level = searchParams.get("level");
  //bring in the 5 arrays from the backend
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const backendArrays = () => {
    setLoading(true);
    axios
      .get(`${REACT_APP_API_SERVER_URL}`)
      .then((response) => {
        //these are both objects
        setArraysTogether(response.data[0]);
        setArrayAgainst(response.data[1]);
        setLoading(false);
      })

      .catch((err) => console.log(err));
    setLoading(false);
  };

  //this will be ran everytime it starts
  useEffect(() => {
    backendArrays();
  }, []);

  useEffect(() => {
    console.log(arraysTogether);
  }, [arraysTogether]);

  return (
    <div className="wizard-style__wrapper">
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : level && level === "level2" ? (
        <Equation2 array1={arrayAgainst} array2={arraysTogether} />
      ) : (
        <Equation1 array1={arrayAgainst} array2={arraysTogether} />
      )}
    </div>
  );
}

export default EquationPage;
