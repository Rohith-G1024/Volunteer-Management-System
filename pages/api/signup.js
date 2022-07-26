import connectMongo from "../../utils/connectMongo";
import Student from "../../models/studentModel";
import General from "../../models/generalModel";
import Group from "../../models/groupModel";
import College from "../../models/collegeModel";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      //   console.log('CONNECTING TO MONGO');
      await connectMongo();

      if (req.body.type === 1) {
        // console.log("CREATING STUDENT");
        const add = await Student.create(req.body);
        res.status(200).json({ add });
      } else if (req.body.type === 2) {
        const add = await General.create(req.body);
        res.status(200).json({ add });
      } else if (req.body.type === 3) {
        const add = await Group.create(req.body);
        res.status(200).json({ add });
      } else if (req.body.type === 4) {
        const add = await College.create(req.body);
        res.status(200).json({ add });
      }
    //   res.status(200).json({ message: "User Added successfully" });
      // res.json({ test });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }
}
