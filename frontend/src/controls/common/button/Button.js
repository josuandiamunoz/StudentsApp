function Button({ onClick, text, className, enabled = true }) {
    return (
        <button onClick={onClick} className={className} disabled={!enabled}>
            {text}
        </button>
    );
}

export default Button;