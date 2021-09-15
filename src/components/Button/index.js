
function Button({children, onClick, className}){
    return (
        <button onClick={onClick} className="btn btn-primary">{children}</button>
    );
}

export default Button;