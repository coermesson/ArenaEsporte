import './Button.css';


const Button = ({ id, text, action, type = 'button' }) => {
  return (
    <button
      id={id}
      type={type}
      onClick={action}
      className="botao"
    >
      {text}
    </button>
  );
};

export default Button;
