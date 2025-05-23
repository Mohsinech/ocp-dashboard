import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/lib/auth";
import { connectToDB } from "@/lib/mongo";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const db = await connectToDB();

        const user = await db
          .collection("users")
          .findOne({ email: credentials.email });

        if (!user) return null;

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) return null;

        if (!user.approved) return null;

        return {
          id: user._id.toString(),
          email: user.email,
          fullName: user.fullName,
          role: user.role,
          approved: user.approved,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.fullName = user.fullName;
        token.role = user.role;
        token.approved = user.approved;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.fullName = token.fullName;
      session.user.role = token.role;
      session.user.approved = token.approved;
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
