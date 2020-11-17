import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyD0BNzFExOBZXcAd9pD2kPMWJkg4bTgFz8",
    authDomain: "kj-hilights.firebaseapp.com",
    databaseURL: "https://kj-hilights.firebaseio.com",
    projectId: "kj-hilights",
    storageBucket: "kj-hilights.appspot.com",
    messagingSenderId: "933806432095",
    appId: "1:933806432095:web:11bdd62f7b1b03516960ea",
    measurementId: "G-3SXKNN8LWW"
};

// 初期化は一度だけ
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;