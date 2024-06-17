import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://srm1:qwer1234@cluster2.sye3vfl.mongodb.net/meetupDB?retryWrites=true&w=majority&appName=Cluster2"
    );
    const db = client.db("meetupDB"); //데이터베이스이름?
    //sq에서 테이블이라고 하는 걸 nosql에서는 collection이라고 함

    const meetupsCollection = db.collection("meetups"); //이름짓기나름

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close(); //db연결끊기

    res.status(200).json({ message: "모임이 생성되었습니다." });
  }
}
