import { CurrentUserFragment } from 'graphql/fragments/__generated__/currentUserInfo.generated';

export type TAccountDropdown = {
  user: CurrentUserFragment;
  signOut: () => Promise<void>;
};
