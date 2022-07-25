import connectMongo from '../../utils/connectMongo';
import Student from '../../models/studentModel';
import General from '../../models/generalModel';
import Group from '../../models/groupModel';
import College from '../../models/collegeModel';

export default async function handler(req, res) {
	if(req.method==='POST'){
		try {
			//   console.log('CONNECTING TO MONGO');
				await connectMongo();	
			//   console.log('CONNECTED TO MONGO');
		  
			//   console.log('CREATING DOCUMENT');
				
				if(req.body.type===1){
					const add = await Student.create(req.body);
					res.json({ add }); 
				}
				else if(req.body.type===2){
					const add = await General.create(req.body);
					res.json({ add }); 
				}
				else if(req.body.type===3){
					const add = await Group.create(req.body);
					res.json({ add });
				}
				else if(req.body.type===4){
					const add = await College.create(req.body);
					res.json({ add });
				}
				// const test = await Test.create(req.body);
				// console.log('CREATED DOCUMENT');
		  
				  // res.json({ test });
			} catch (error) {
				console.log(error);
				res.json({ error });
			}
	}

  }