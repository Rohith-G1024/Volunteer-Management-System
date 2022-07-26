import NextAuth from "next-auth/next";
import { Providers } from "next-auth/providers";

export default NextAuth({
	session :{
		jwt: true
	},
	jwt: {
		secret:'lolbrehhhhhh'
	},
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET
		}),
	],
	database: process.env.DB_URL,
})