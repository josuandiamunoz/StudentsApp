import TextBox from "../../common/textbox/TextBox";
import Button from "../../common/button/Button";


function Login(){
    return (
        <div>
            <TextBox id="username" label="Username" />
            <TextBox id="password" label="Password" isPassword={true} />
            <Button onClick={() => console.log("Login button clicked")} text="Login" />
        </div>
    );
}

export default Login;