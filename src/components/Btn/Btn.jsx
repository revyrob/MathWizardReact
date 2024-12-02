import "./Btn.scss";

//button that can be used throughout the app and have small changes added to it
function Btn({ text, className, value, onClick }) {
  return (
    <button className="btn" value={value} onClick={onClick}>
      <span className={className}>{text}</span>
    </button>
  );
}

export default Btn;
