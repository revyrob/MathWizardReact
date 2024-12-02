//custom comps and styling
import Header from "../components/Header/Header";
import Equation from "../components/Equation/Equation";

//libaries
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

//equation page determines which equation to use from level chosen
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
      .get(
        `${REACT_APP_API_SERVER_URL}`,
        //bring in the params for the level to determine which one to use
        //only get contracts that are inactive (true)
        //and that have the province needed
        {
          params: {
            level: level,
          },
        }
      )
      .then((response) => {
        //these are both objects
        setArraysTogether(response.data.arrayLarge);
        setArrayAgainst(response.data.arraySmall);
        setLoading(false);
      })

      .catch((err) => console.log(err));
    setLoading(false);
  };

  //this will be ran everytime it starts
  useEffect(() => {
    if (level !== undefined) {
      backendArrays();
    }
  }, [backendArrays, level]);

  return (
    <div className="wizard-style__wrapper">
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Equation array1={arrayAgainst} array2={arraysTogether} level={level} />
      )}
    </div>
  );
}

export default EquationPage;
