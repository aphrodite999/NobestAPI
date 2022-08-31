// yarn add firebase react-router-dom @types/react-router-dom
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
//auth
const firebaseConfig = {
    apiKey: 'AIzaSyDz696hCdnL1LG9EXCDR8L8AxvF7Baj7qQ',
    authDomain: 'nobest-api.netlify.app',
    projectId: 'nobest-api',
    storageBucket: 'nobest-api.appspot.com',
    messagingSenderId: '684457114701',
    appId: '1:684457114701:web:3bd6690fb5e9f0dbdf7004',
    measurementId: 'G-4DPL88GMDZ'
};

let contextFirebase;

export let token;
export let refreshToken;

export function FirebaseInit(Credential = { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId }) {
    contextFirebase = initializeApp(Credential);
}

export async function FirebaseAuthEmail(email, password) {
    const fireauth = getAuth(contextFirebase);
    const result = await createUserWithEmailAndPassword(fireauth, email, password)
        .then(function (result) {
            return result;
        })
        .catch((e) => {
            console.trace(e.code);
            console.trace(e.message);
            return e;
        });

    if (result.user === undefined || result.user.Aa === undefined || result.user.refreshToken === undefined) {
        console.trace(result.user);
        return [false, Error('ログイントークンが見つかりませんでした')];
    }
    token = result.user.Aa;
    refreshToken = result.user.refreshToken;

    return true;
}

export async function FirebaseGoogleLogin(domain) {
    const fireauth = getAuth(contextFirebase);
    const provider = new GoogleAuthProvider();
    if (domain !== undefined) {
        provider.setCustomParameters({
            hd: 'nobest.jp'
        });
    }

    const result = await signInWithPopup(fireauth, provider)
        .then(function (result) {
            return result;
        })
        .catch((e) => {
            console.trace(e.code);
            console.trace(e.message);
            return e;
        });

    if (result.user === undefined || result.user.accessToken === undefined || result.user.refreshToken === undefined) {
        console.trace(result.user);
        return [false, Error('ログイントークンが見つかりませんでした')];
    }
    console.log("Google Login Result : ", result.user);
    token = result.user.Aa;
    refreshToken = result.user.refreshToken;
    return [true, undefined];
}

export async function signOut() {
    try {
        await signOut();
    } catch (error) {
        console.trace(error);
    }
}
