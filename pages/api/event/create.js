import connectMongo from '../../../utils/connectMongo';
import General from "../../../models/generalModel";
import Event from '../../../models/eventModel';
import Student from '../../../models/studentModel';

export default async function handler(req, res) {
	if(req.method==='POST'){
		try {

			await connectMongo();
			const addEvent = await Event.create(req.body);
			res.status(200).json({ addEvent });
			Student.findOneAndUpdate({email: req.body.pcEmail},{isPc: true}, (err,doc) => {
				if(err) console.log(err);
				else if(doc) console.log('Updated. Old Doc 1:', doc);
				else{
					General.findOneAndUpdate({email: req.body.pcEmail},{isPc: true}, (err,doc) => {
						if(err) console.log(err);
						else if(doc) console.log('Updated. Old Doc 2:', doc);
						else console.log("Old document not found");
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
