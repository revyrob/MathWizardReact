import './Button.scss';

function Button({icon, alt, text, className}) {

    return (
        <button className='btn'>
            <img src={icon} className={className} alt={alt}/>
            <span className={className}>{text}</span>
        </button>
    );
}

export default Button;