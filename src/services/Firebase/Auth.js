import Firebase from "./index";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { get } from "./Firestore";

const auth = getAuth(Firebase);

export async function signUp(email, password) {
  if (!email || !password) {
    throw new Error("Missing necessary info");
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential.user;
  } catch (err) {
    throw new Error(err);
  }
}

export async function signIn(email, password) {
  if (!email || !password) {
    throw new Error("Missing email or password");
  }

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const company = await get("company", [
      { field: "username", condition: "==", value: email },
    ]);
    return { ...userCredential.user, ...company[0], companyId: company[0].id };
  } catch (err) {
    throw new Error(err);
  }
}

export async function logOut() {
  return signOut(auth);
}
