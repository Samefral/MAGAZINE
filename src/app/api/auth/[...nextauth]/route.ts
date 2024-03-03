import NextAuth from 'next-auth';
import { authConfig } from '../../../../configs/auth';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
