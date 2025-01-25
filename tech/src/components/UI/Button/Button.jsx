const Button = ({ isToogle, children, onClick }) => {
  return (
    <button
      className={isToogle ? "btn btn-toogle" : "btn"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
