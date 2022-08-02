import connectMongo from "../../utils/connectMongo";
import Student from "../../models/studentModel";
import General from "../../models/generalModel";
import Group from "../../models/groupModel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      //console.log(res);
      //   console.log('CONNECTING TO MONGO');
      await connectMongo();
      //   console.log('CONNECTED TO MONGO');
      const email = req.query.email;
      const password = req.query.password;

      Student.findOne({ email: email, password: password }, (err, doc) => {
        if (err) console.log("err1",err);
        else if (doc) {
          console.log(doc)
          res.status(200).json({ doc });
          // return;
        } else {
          General.findOne({ email: email, password: password }, (err, doc) => {
            if (err) console.log("err2",err);
            else if (doc) {
              console.log("here");
              res.status(200).json({ doc });
            } else {
              Group.findOne(
                { email: email, password: password },
                (err, doc) => {
                  if (err) console.log("err3",err);
                  else if (doc) {
                    res.status(200).json({ doc });
                    // return;
                  } else {
                    // alert("Invalid credentials")
                    console.log("here2");
                    console.log("Document not found.");
                    res.status(401).json({ message: "login failed" }).end();
                    // res.end()
                  }
                }
              );
            }
          });
        }
      });

      return;

    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }
}
