import connectMongo from '../../../utils/connectMongo';
import Student from "../../../models/studentModel";

export default async function handler(req, res) {
  try {
    await connectMongo();

	Student.find({isPc: false}, (err, doc)=> {
        if (err) console.log(err);
		else if (doc) {
			// console.log(doc);
			res.status(200).json({ doc });
		} 
		else {
			console.log("Document not found.");
			res.status(300).json({ message: "colege login failed" });
		}
	})
	return;
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
