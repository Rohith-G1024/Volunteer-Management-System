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
			if (req.body.stype === 1){
				Student.findOneAndUpdate({email: req.body.email},{isPc: true}, (err,doc) => {
					if(err) console.log(err);
					else console.log('Updated. Old Doc:', doc);
				});
			}
			else if(req.body.stype === 2){
				General.findOneAndUpdate({email: req.body.email},{isPc: true}, (err,doc) => {
					if(err) console.log(err);
					else console.log('Updated. Old Doc:', doc);
				});
			}
			return;
	  } catch (error) {
		console.log(error);
		res.json({ error });
	  }
	}

}
