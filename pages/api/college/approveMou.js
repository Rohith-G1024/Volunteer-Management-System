import connectMongo from '../../../utils/connectMongo';
import College from '../../../models/collegeModel';

export default async function handler(req, res) {
	if(req.method==='POST'){
		try {

			await connectMongo();

			College.findOneAndUpdate({email: req.body.email},{isPc: true}, (err,doc) => {
				if(err) console.log(err);
				else if(doc) console.log('Approved MoU for College:', doc);
				else console.log("Old document not found");
			});
			return;
	  } catch (error) {
		console.log(error);
		res.json({ error });
	  }
	}

}
