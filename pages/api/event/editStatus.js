import connectMongo from '../../../utils/connectMongo';
import Event from '../../../models/eventModel';

export default async function handler(req, res) {
	if(req.method==='POST'){
		try {

			await connectMongo();

			Event.findOneAndUpdate({pcEmail: req.body.pcEmail, title: req.body.title},{status: req.body.status}, (err,doc) => {
				if(err) console.log(err);
				else if(doc) console.log('Changed status of event:', doc);
				else console.log("Old document not found");
			});
			return;
	  } catch (error) {
		console.log(error);
		res.json({ error });
	  }
	}

}
