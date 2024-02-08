import "./Hero.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">Math Wizards</h1>
      <h2 className="hero__mission">
        A place where wizards can sharpen their math skills 🪄
      </h2>
      <p>
        You will have <span className="number">3</span> minutes to answer as
        many equations as possible.
      </p>
      <div className="hero__btnDiv">
        <Button className="goToGame__btn" text="Play Game" />
        <Button className="goToGame__btn" text="How to Play" />
        <Button className="goToGame__btn" text="Log in" />
      </div>
    </section>
  );
}
export default Hero;
