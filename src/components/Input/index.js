function Input({type, placeholder, value, onChange, id , onBlur}){
    return(
        <input id={id} onBlur={onBlur} className="form-control margin-input" value={value} onChange={onChange} type={type} placeholder={placeholder} />
    );
}

export default Input;