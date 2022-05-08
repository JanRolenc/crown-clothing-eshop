
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";




const SignIn = () => {

  const logGooleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }


  return (
    <div>
      <SignUpForm />
      <button onClick={logGooleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
