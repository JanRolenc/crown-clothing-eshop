import "./sign-up-form.style.scss";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match")
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user)

            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Cannot create user, email already in use")
                console.log('error code:', error.code)
            }

            else {
                console.log('user creation encountered an error')
                console.log('error code:', error.code)

            }
        }
    }
    return (
        <div className="form-group">
            <div className="sign-in">
                <h1>Sign un with your email and password</h1>
                <form onSubmit={handleSubmit} className="w3-container">

                    <label>Display Name</label>
                    <input
                        required
                        className="w3-input"
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    <input
                        required
                        className="w3-input"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    <input
                        required
                        className="w3-input"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                    <label>Confirm Password</label>
                    <input
                        required
                        className="w3-input"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                    />
                    <button type="submit">Sign Up</button>

                </form>
            </div>
            {/* <div className="register">
                <h1>Register</h1>
                <form class="w3-container">

                    <label>First Name</label>
                    <input class="w3-input" type="text" />

                    <label>Last Name</label>
                    <input class="w3-input" type="text" />
                    <label>Email</label>
                    <input class="w3-input" type="email" />
                    <button>Register</button>

                </form>
            </div> */}
        </div>
    )
}

export default SignUpForm;