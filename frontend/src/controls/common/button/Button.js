function Button({ onClick, text, className, enabled }) {
    return (
        <button onClick={onClick} className={className} disabled={!enabled}>
            {text}
        </button>
    );
}

export default Button;