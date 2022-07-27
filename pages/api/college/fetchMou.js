import connectMongo from '../../../utils/connectMongo';
import College from '../../../models/collegeModel';

export default async function handler(req, res) {
	if(req.method==='GET'){
		try {

			await connectMongo();

			College.find({mouApproved: false}, (err,doc) => {
				if(err) console.log(err);
				else if(doc) {
					console.log(doc);
					res.status(200).json({doc})
				}
				else console.log("unknown error at fetchMou API");
			});
			return;
	  } catch (error) {
		console.log(error);
		res.json({ error });
	  }
	}

}
