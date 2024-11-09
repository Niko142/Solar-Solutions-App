// import './Button.scss';

const Button = ({ isActive, children, onClick, id}) => {
    return (
        <button id={id} className={isActive ? 'btn btn_active' : 'btn btn_passive'} onClick={onClick}>{children}</button>
    )
}

export default Button;