import connectMongo from '../../../utils/connectMongo';
import Event from '../../../models/eventModel';

export default async function handler(req, res) {
	if(req.method==='POST'){
		try {

			await connectMongo();

			let status = req.body.status
			let email = req.body.email
			Event.findOneAndUpdate({pcEmail: req.body.pcEmail, title: req.body.title},{status: req.body.status}, (err,doc) => {
				if(err) console.log(err);
				else if(doc) {
					console.log('Changed status of event:', doc);
					if(status==='completed'){
						Student.findOneAndUpdate({email: email},{isPc: false}, (err,doc) => {
							if(err) console.log(err);
							else if(doc) console.log('Updated to false. Old Doc 1:', doc);
							else{
								General.findOneAndUpdate({email: email},{isPc: false}, (err,doc) => {
									if(err) console.log(err);
									else if(doc) console.log('Updated to false. Old Doc 2:', doc);
									else console.log("Old document not found");
								});
							}
						});
					}
				}
				else console.log("Old document not found");
			});
			return;
	  } catch (error) {
		console.log(error);
		res.json({ error });
	  }
	}

}
