import "../App.scss";
import Btn from "../components/Btn/Btn";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";

function Homepage() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return (
    <section className="wizard-style">
      <Hero />
      <div className="wizard-style__wrapper">
        <Link className="wizard-style__date" to="/range">
          <Btn className="goToGame__btn" text="Play Game" />
        </Link>
        {/* <Link to="">
          <Btn className="goToGame__btn" text="How to Play" />
        </Link> */}
        <p className="wizard-style__date">May 7th, 2024</p>
        <p className="wizard-style__date">No. 3</p>
        <p className="wizard-style__date">Edited by Kayle Robson</p>
      </div>
    </section>
  );
}
export default Homepage;
