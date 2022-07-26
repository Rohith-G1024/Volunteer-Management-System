import NextAuth from "next-auth/next";
import { Providers } from "next-auth/providers";

export default NextAuth({
	database: process.env.DB_URL,
	session :{
		jwt: true
	},
	jwt: {
		secret:'lolbrehhhhhh'
	}
})