import firebase from "./serviceAccount"
import "firebase/firestore"

//最新放送情報取得
const getCollection = () => {
    const db = firebase.firestore()
    var movies = db.collection("movies").get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
}
export default doc;