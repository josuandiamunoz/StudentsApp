function TextBox({ id, label, value, isPassword = false }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={isPassword ? "password" : "text"} value={value} />
        </div>
    );
}

export default TextBox;