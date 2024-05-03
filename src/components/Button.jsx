const Button = ({ label, icon, className }) => {
  return (
    <button className={className}>
      {label}
      {icon}
    </button>
  );
};

export default Button;
