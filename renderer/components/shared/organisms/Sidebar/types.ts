import { CurrentUserFragment } from 'graphql/fragments/__generated__/currentUserInfo.generated';

export type TSidebar = {
  user?: CurrentUserFragment | null;
  signOut: () => Promise<void>;
};
