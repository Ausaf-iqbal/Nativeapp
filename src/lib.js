import firebase from "firebase";
export const onLogin = async (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
export const onSignUp = async (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};
export const onLogout = async () => {
  return firebase.auth().signOut();
};
