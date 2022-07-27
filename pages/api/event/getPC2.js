import connectMongo from '../../../utils/connectMongo';
import General from "../../../models/generalModel";

export default async function handler(req, res) {
  try {
    await connectMongo();

	General.find({isPc: false}, (err, doc)=> {
        if (err) console.log(err);
		else if (doc) {
			// console.log("final",final);
			res.status(200).json({ doc });
		} 
		else {
			console.log("Document not found. College login failed");
		}
	})
	return;
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
