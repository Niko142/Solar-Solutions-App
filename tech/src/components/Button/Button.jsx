import './Button.css';

const Button = ({ isActive, children, onClick, id}) => {
    return (
        <button id={id} className={isActive ? 'button_active' : 'button_passive'} onClick={onClick}>{children}</button>
    )
}

export default Button;