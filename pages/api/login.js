import connectMongo from "../../utils/connectMongo";
import Student from "../../models/studentModel";
import General from "../../models/generalModel";
import Group from "../../models/groupModel";
import College from "../../models/collegeModel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      console.log(res);
      //   console.log('CONNECTING TO MONGO');
      await connectMongo();
      //   console.log('CONNECTED TO MONGO');
      const email = req.query.email;
      const password = req.query.password;

      Student.findOne({ email: email, password: password }, (err, doc) => {
        if (err) console.log(err);
        else if (doc) {
          res.status(200).json({ doc });
        }
      });

      General.findOne({ email: email, password: password }, (err, doc) => {
        if (err) console.log(err);
        else if (doc) {
          res.status(200).json({ doc });
        }
      });

      Group.findOne({ email: email, password: password }, (err, doc) => {
        if (err) console.log(err);
        else if (doc) {
          res.status(200).json({ doc });
        }
      });

      console.log("Document not found.");
      res.status(400).json({ message: "login failed" });
      return;
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }
}
