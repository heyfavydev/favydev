import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.secret,
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.access_token = account.access_token
      }
      return token // Do different verification for other providers that don't have `email_verified`
    },
    redirect: async (url, _baseUrl) => {
      if (url === '/dashboard') {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    }
  }
})