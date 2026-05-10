function TextBox({ id, label, value, onChange,isPassword = false }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} 
                   type={isPassword ? "password" : "text"} 
                   value={value} 
                   onChange={onChange}   />
        </div>
    );
}

export default TextBox;