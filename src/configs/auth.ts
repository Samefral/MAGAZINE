import type { AuthOptions } from 'next-auth';
import GoggleProvider from 'next-auth/providers/google';

export const authConfig: AuthOptions = {
  providers: [
    GoggleProvider({
      clientId: '397651869821-rn4c8ovkkb3nafl2rkd9u0uln48vamer.apps.googleusercontent.com',
      clientSecret: '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'
    })
  ]
};
