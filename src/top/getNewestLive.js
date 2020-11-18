import firebase from "../serviceAccount"
import "firebase/firestore"

let newestRecord = test();

async function test() {
    const result = [];
    //コレクション取得
    const db = firebase.firestore();
    //moviesコレクションを取得
    const movies = db.collection("movies");
    //最新の1件の参照を取得
    let newestRecordRef = movies.orderBy("num", "desc").limit(1);
    //参照からsnapShotを取得
    let querySnapshot = await newestRecordRef.get();
    //snapShotから実データを取得する
    querySnapshot.forEach(doc => { result.push(doc.data()); });
    return result;

}

//console.log(newestRecord);
export default newestRecord;    