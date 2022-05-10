import "./sign-in-form.style.scss";
import { useState, useContext } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../contexts/user.context"

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            setCurrentUser(user);

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("user not found");
                    break;
                default:
                    console.log(error);
            }
        }
    }
    return (
        <div className="sign-in-form">
            <h2>Do you have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} className="">
                <FormInput
                    label="Email"
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <FormInput
                    label="Password"
                    required
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button" //defaultne je type submit; to musim zmenit, aby nereagoval na inputy 
                        buttonType="google"
                        onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;