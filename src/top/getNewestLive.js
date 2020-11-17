import firebase from "../serviceAccount"
import "firebase/firestore"

let newestRecord = [];

//コレクション取得
const db = firebase.firestore();
//moviesコレクションを取得
const movies = db.collection("movies");
//最新の1件の参照を取得
let newestRecordRef = movies.orderBy("num", "desc").limit(1);
//参照からsnapShotを取得
newestRecordRef.get().then((querySnapshot) => {
    //snapShotから実データを取得する
    querySnapshot.forEach(doc => { newestRecord.push(doc.data()); });
    // //取得結果を配列に設定
    // newestRecord = {
    //     id: doc.id,
    //     num: doc.get("num"),
    //     title: doc.get("title"),
    //     url: doc.get("url"),
    //     start: doc.get("start"),
    //     end: doc.get("end"),
    //     getDate: doc.get("getDate"),
    //     liveDate: (doc.get("liveDate"))
    // };
    // console.log(doc.id, " => ", doc.data());
    // console.log(doc.get("num"));
    // console.log("aaa")
    //console.log(newestRecord[0]);
    return newestRecord;
});

//console.log(newestRecord);
export default newestRecord;    