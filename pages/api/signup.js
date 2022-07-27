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
        const addStudent = await Student.create(req.body);
        res.status(200).json({ addStudent });
      } else if (req.body.type === 2) {
        const addGeneral = await General.create(req.body);
        res.status(200).json({ addGeneral });
      } else if (req.body.type === 3) {
        const addGroup = await Group.create(req.body);
        res.status(200).json({ addGroup });
      } else if (req.body.type === 4) {
        const addCollege = await College.create(req.body);
        res.status(200).json({ addCollege });
      }
    //   res.status(200).json({ message: "User Added successfully" });
      // res.json({ test });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }
}
