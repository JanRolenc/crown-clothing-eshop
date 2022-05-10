
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.style.scss"

const Authentication = () => {

  return (
    <div className="auth-container">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
