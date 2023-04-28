import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export function firebaseConfig() {
    const firebaseConfig = {
        apiKey: "AIzaSyBKYJbSYEdwiVTeVO-BYFNMPttU9ZLyM9A",
        authDomain: "control-de-gasto-c0941.firebaseapp.com",
        projectId: "control-de-gasto-c0941",
        storageBucket: "control-de-gasto-c0941.appspot.com",
        messagingSenderId: "630156722919",
        appId: "1:630156722919:web:1a05253d3ebfe2a145d842",
        measurementId: "G-0KJQ64H5N3"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    console.log("firebase connected 200 OK")
}

export async function firebaseLogin(email, password) {
    try {
        console.log("intentando login ", email)
        await signInWithEmailAndPassword(getAuth(), email, password);
    } catch (e) {
        console.log("usuario o contraseña incorrecta")
        return false;
    }
    console.log("login correcto")
    return true;
}