import './Hero.scss';
import Button from '../Button/Button';

function Hero() {
    return (
        <section className="hero">
        <h1 className="hero__title">
            Math Wizards
        </h1>
        <h2 className="hero__mission">
            A place where wizards can sharpen their math skills 🪄
        </h2>
        <Button className="goToGame__btn" text="Play Game"/>
    </section>
    );
}
export default Hero;