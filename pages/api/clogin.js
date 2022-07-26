import connectMongo from "../../utils/connectMongo";
import College from "../../models/collegeModel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      //console.log(res);
      //   console.log('CONNECTING TO MONGO');
      await connectMongo();
      //   console.log('CONNECTED TO MONGO');
      const email = req.query.email;
      const password = req.query.password;

      College.findOne({ email: email, password: password }, (err, doc) => {
        if (err) console.log(err);
        else if (doc) {
          res.status(200).json({ doc });
        } 
		else {
			console.log("Document not found.");
			res.status(300).json({ message: "colege login failed" });
        }
      });
      return;

    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }
}
