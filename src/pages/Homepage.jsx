import "../App.scss";
import Btn from "../components/Btn/Btn";
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";

function Homepage() {
  return (
    <section className="wizard-style">
      <Hero />
      <div className="wizard-style__wrapper">
        <Link to="/equation">
          <Btn className="goToGame__btn" text="Play Game" />
        </Link>
        <Link to="">
          <Btn className="goToGame__btn" text="How to Play" />
        </Link>
      </div>
    </section>
  );
}
export default Homepage;
