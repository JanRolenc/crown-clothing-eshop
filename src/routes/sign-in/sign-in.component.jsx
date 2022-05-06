import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
  const logGooleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>im a signin page</h1>
      <button onClick={logGooleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
