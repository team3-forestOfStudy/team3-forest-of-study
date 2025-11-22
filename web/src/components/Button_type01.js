import "../styles/Button_type01.css";

function Button_type01({ buttonText, buttonClass }) {
  return (
    <>
      <button className={`Button01 ${buttonClass}`}>
        <p className="Button01_text after">{buttonText}</p>
        <p className="Button01_text">{buttonText}</p>
        <p className="Button01_text_default">{buttonText}</p>
      </button>
    </>
  );
}

export default Button_type01;
