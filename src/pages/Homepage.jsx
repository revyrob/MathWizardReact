//custom comps and styling
import "../App.scss";
import Btn from "../components/Btn/Btn";
import Hero from "../components/Hero/Hero";

//libraries
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Homepage() {
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState();
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  const REACT_APP_API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

  //bring in the 5 arrays from the backend
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const findCounter = () => {
    setLoading(true);
    axios
      .get(`${REACT_APP_API_SERVER_URL}/counter`)
      .then((response) => {
        //these are both objects
        setCounter(response.data.counter);
        setLoading(false);
      })

      .catch((err) => console.log(err));
    setLoading(false);
  };

  //this will be ran everytime it starts
  useEffect(() => {
    findCounter();
  }, [findCounter]);

  return (
    <section className="wizard-style">
      <Hero />
      <div className="wizard-style__wrapper">
        <Link className="wizard-style__date" to="/range">
          <Btn className="goToGame__btn" text="Play Game" />
        </Link>

        <p className="wizard-style__date">{today}</p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p className="wizard-style__date">No. {counter}</p>
        )}
        <p className="wizard-style__date">Created by Kayle Robson</p>
      </div>
    </section>
  );
}
export default Homepage;
