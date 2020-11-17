import React from 'react';
import firebase from "../serviceAccount"
import "firebase/firestore"

let newestRecord;

//コレクション取得

const db = firebase.firestore();
//moviesコレクションを取得
const movies = db.collection("movies");
movies.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data());
    });
    console.log(querySnapshot.size + "top.js側");
    newestRecord = querySnapshot;
})
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });

export default newestRecord;