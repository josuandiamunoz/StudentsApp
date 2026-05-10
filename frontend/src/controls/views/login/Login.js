import TextBox from "../../common/textbox/TextBox";
import Button from "../../common/button/Button";


function Login(){
    return (
        <div>
            <TextBox 
                id="email" 
                label="Email" 
            />
            <TextBox 
                id="password" 
                label="Password" 
                isPassword={true}
            />
            <Button text="Login" />
        </div>
    );
}

export default Login;