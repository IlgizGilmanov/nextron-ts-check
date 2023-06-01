export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISO8601DateTime: string;
};

/** Input object for chat archive mutation */
export type ArchiveChatInput = {
  /** ID */
  id: Scalars['ID'];
};

/** Payload object for archive chat mutation */
export type ArchiveChatPayload = {
  __typename?: 'ArchiveChatPayload';
  /** Chat */
  chat: Chat;
};

export type AuthorizationResult = {
  __typename?: 'AuthorizationResult';
  /** Human-readable error message */
  message?: Maybe<Scalars['String']>;
  /** Reasons of check failure */
  reasons?: Maybe<FailureReasons>;
  /** Result of applying a policy rule */
  value: Scalars['Boolean'];
};

/** Data type for Chat */
export type Chat = {
  __typename?: 'Chat';
  canArchive: AuthorizationResult;
  canCreateMessage: AuthorizationResult;
  canUpdate: AuthorizationResult;
  /** Created datetime */
  createdAt: Scalars['ISO8601DateTime'];
  /** ID */
  id: Scalars['ID'];
  /** Messages */
  messages: Array<Message>;
  /** Name */
  name: Scalars['String'];
  /** Speech style */
  speechStyle?: Maybe<SpeechStyle>;
  /** Status */
  status: ChatStatus;
  /** Tone of voice */
  toneOfVoice?: Maybe<ToneOfVoice>;
  /** Created datetime */
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for Chat. */
export type ChatConnection = {
  __typename?: 'ChatConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ChatEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Chat>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ChatEdge = {
  __typename?: 'ChatEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Chat>;
};

/** Chat status */
export enum ChatStatus {
  /** Generating ai response message */
  Generating = 'GENERATING',
  /** Ai response message generated */
  Ready = 'READY',
}

/** Input object for user confirmation flow */
export type ConfirmUserInput = {
  /** Token */
  value: Scalars['String'];
};

/** Payload object for user confirmation mutation */
export type ConfirmUserPayload = {
  __typename?: 'ConfirmUserPayload';
  /** Current User */
  me: CurrentUser;
};

/** Input object for chat creation mutation */
export type CreateChatInput = {
  /** Message to create with chat */
  message?: InputMaybe<MessageInput>;
  /** Chat name */
  name?: InputMaybe<Scalars['String']>;
};

/** Payload object for create chat mutation */
export type CreateChatPayload = {
  __typename?: 'CreateChatPayload';
  /** Chat */
  chat: Chat;
};

/** Input object for message creation mutation */
export type CreateMessageInput = {
  /** Chat ID */
  chatId: Scalars['ID'];
  /** First message content */
  content: Scalars['String'];
};

/** Payload object for create chat mutation */
export type CreateMessagePayload = {
  __typename?: 'CreateMessagePayload';
  /** Message */
  message: Message;
};

/** Data type for Current User */
export type CurrentUser = {
  __typename?: 'CurrentUser';
  /** URL for avatar image */
  avatarUrl?: Maybe<Scalars['String']>;
  canCreateChat: AuthorizationResult;
  /** Chats array */
  chats?: Maybe<ChatConnection>;
  /** Confirmation datetime */
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** Email */
  email: Scalars['String'];
  /** First Name */
  firstName?: Maybe<Scalars['String']>;
  /** ID */
  id: Scalars['ID'];
  /** Last Name */
  lastName?: Maybe<Scalars['String']>;
};

/** Data type for Current User */
export type CurrentUserChatsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type FailureReasons = {
  __typename?: 'FailureReasons';
  /** JSON-encoded map of reasons */
  details: Scalars['String'];
  /** Human-readable errors */
  fullMessages: Array<Scalars['String']>;
};

/** Data type for file direct upload */
export type ImageUploader = {
  /** ID */
  id: Scalars['String'];
  /** File metadata */
  metadata: ImageUploaderMetadata;
  /** Storage: cache or store */
  storage?: InputMaybe<Scalars['String']>;
};

/** Data type for file */
export type ImageUploaderMetadata = {
  /** Filename */
  filename: Scalars['String'];
  /** Filetype */
  mimeType: Scalars['String'];
  /** Size in bytes */
  size: Scalars['Int'];
};

/** Data type for Message */
export type Message = {
  __typename?: 'Message';
  canArchive: AuthorizationResult;
  canUpdate: AuthorizationResult;
  /** Chat */
  chat: Chat;
  /** Content */
  content: Scalars['String'];
  /** Created datetime */
  createdAt: Scalars['ISO8601DateTime'];
  /** ID */
  id: Scalars['ID'];
  /** Role */
  role: MessageRole;
  /** Created datetime */
  updatedAt: Scalars['ISO8601DateTime'];
};

/** Input object for message creation mutation */
export type MessageInput = {
  /** First message content */
  content: Scalars['String'];
};

/** Message role */
export enum MessageRole {
  /** Assistant message */
  Assistant = 'ASSISTANT',
  /** Error message */
  Error = 'ERROR',
  /** User message */
  User = 'USER',
}

/** Mutations */
export type Mutation = {
  __typename?: 'Mutation';
  /** Archive chat */
  archiveChat?: Maybe<ArchiveChatPayload>;
  /** Confirm user email */
  confirmUser?: Maybe<ConfirmUserPayload>;
  /** Create chat */
  createChat?: Maybe<CreateChatPayload>;
  /** Create message */
  createMessage?: Maybe<CreateMessagePayload>;
  /** Authenticate with OAuth */
  omniauthSignInOrSignUp?: Maybe<SignInPayload>;
  /** File presign data for upload */
  presignData?: Maybe<PresignDataPayload>;
  /** Request password recovery link in email */
  requestPasswordRecovery?: Maybe<RequestPasswordRecoveryPayload>;
  /** Request password recovery short code in email */
  requestPasswordRecoveryShortCode?: Maybe<RequestPasswordRecoveryShortCodePayload>;
  /** Reset user's password with short code */
  resetPasswordWithShortCode?: Maybe<ResetPasswordWithShortCodePayload>;
  /** Reset user's password with reset token */
  resetPasswordWithToken?: Maybe<ResetPasswordWithTokenPayload>;
  /** Set chat speech style */
  setChatSpeechStyle?: Maybe<SetChatSpeechStylePayload>;
  /** Set chat tone of voice */
  setChatToneOfVoice?: Maybe<SetChatToneOfVoicePayload>;
  /** Sign in */
  signIn?: Maybe<SignInPayload>;
  /** Sign out */
  signOut?: Maybe<SignOutPayload>;
  /** Sign up */
  signUp?: Maybe<SignUpPayload>;
  /** Update chat */
  updateChat?: Maybe<UpdateChatPayload>;
  /** Update short live access token */
  updateToken?: Maybe<UpdateTokenPayload>;
  /** Update user info */
  updateUser?: Maybe<UpdateUserPayload>;
};

/** Mutations */
export type MutationArchiveChatArgs = {
  input: ArchiveChatInput;
};

/** Mutations */
export type MutationConfirmUserArgs = {
  input: ConfirmUserInput;
};

/** Mutations */
export type MutationCreateChatArgs = {
  input: CreateChatInput;
};

/** Mutations */
export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};

/** Mutations */
export type MutationOmniauthSignInOrSignUpArgs = {
  input: OmniauthInput;
};

/** Mutations */
export type MutationPresignDataArgs = {
  input: PresignDataInput;
};

/** Mutations */
export type MutationRequestPasswordRecoveryArgs = {
  input: RequestPasswordRecoveryInput;
};

/** Mutations */
export type MutationRequestPasswordRecoveryShortCodeArgs = {
  input: RequestPasswordRecoveryShortCodeInput;
};

/** Mutations */
export type MutationResetPasswordWithShortCodeArgs = {
  input: ResetPasswordWithShortCodeInput;
};

/** Mutations */
export type MutationResetPasswordWithTokenArgs = {
  input: ResetPasswordWithTokenInput;
};

/** Mutations */
export type MutationSetChatSpeechStyleArgs = {
  input: SetChatSpeechStyleInput;
};

/** Mutations */
export type MutationSetChatToneOfVoiceArgs = {
  input: SetChatToneOfVoiceInput;
};

/** Mutations */
export type MutationSignInArgs = {
  input: SignInInput;
};

/** Mutations */
export type MutationSignOutArgs = {
  input: SignOutInput;
};

/** Mutations */
export type MutationSignUpArgs = {
  input: SignUpInput;
};

/** Mutations */
export type MutationUpdateChatArgs = {
  input: UpdateChatInput;
};

/** Mutations */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** Input object for oauth authentication */
export type OmniauthInput = {
  /** OAuth token from provider */
  authCode: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Data type to presign file for upload */
export type Presign = {
  __typename?: 'Presign';
  /** Metadata fields used as headers on upload to storage */
  fields: Array<PresignField>;
  /** URL where to upload file */
  url: Scalars['String'];
};

/** Input object for prepare presigned URL */
export type PresignDataInput = {
  /** Filename for presign */
  filename: Scalars['String'];
  /** Filetype */
  type: Scalars['String'];
};

/** Payload object for presign file data mutation */
export type PresignDataPayload = {
  __typename?: 'PresignDataPayload';
  /** Data */
  data: Presign;
};

/** Data type for presign fields */
export type PresignField = {
  __typename?: 'PresignField';
  /** Key */
  key: Scalars['String'];
  /** Value */
  value: Scalars['String'];
};

/** Base query */
export type Query = {
  __typename?: 'Query';
  /** Current User */
  me?: Maybe<CurrentUser>;
};

/** Input object for reset password flow */
export type RequestPasswordRecoveryInput = {
  /** Email */
  email: Scalars['String'];
};

/** Payload object for request password reset mutation */
export type RequestPasswordRecoveryPayload = {
  __typename?: 'RequestPasswordRecoveryPayload';
  /** Detail */
  detail: Scalars['String'];
  /** Message */
  message: Scalars['String'];
};

/** Input object for reset password flow */
export type RequestPasswordRecoveryShortCodeInput = {
  /** Email */
  email: Scalars['String'];
};

/** Payload object for request password reset mutation */
export type RequestPasswordRecoveryShortCodePayload = {
  __typename?: 'RequestPasswordRecoveryShortCodePayload';
  /** Detail */
  detail: Scalars['String'];
  /** Message */
  message: Scalars['String'];
};

/** Input object for update user password on reset password */
export type ResetPasswordWithShortCodeInput = {
  /** A new password */
  password: Scalars['String'];
  /** Password reset short code */
  shortCode: Scalars['String'];
};

/** Payload object for update password mutation */
export type ResetPasswordWithShortCodePayload = {
  __typename?: 'ResetPasswordWithShortCodePayload';
  /** Short live access token */
  accessToken: Scalars['String'];
  /** Current User */
  me?: Maybe<CurrentUser>;
  /** Long live refresh token */
  refreshToken: Scalars['String'];
};

/** Input object for update user password on reset password */
export type ResetPasswordWithTokenInput = {
  /** A new password */
  password: Scalars['String'];
  /** Password reset token */
  resetToken: Scalars['String'];
};

/** Payload object for update password mutation */
export type ResetPasswordWithTokenPayload = {
  __typename?: 'ResetPasswordWithTokenPayload';
  /** Short live access token */
  accessToken: Scalars['String'];
  /** Current User */
  me?: Maybe<CurrentUser>;
  /** Long live refresh token */
  refreshToken: Scalars['String'];
};

/** Input object for set chat speech style */
export type SetChatSpeechStyleInput = {
  /** Chat ID */
  chatId: Scalars['ID'];
  /** Speech style */
  value: SpeechStyle;
};

/** Set chat speech style payload */
export type SetChatSpeechStylePayload = {
  __typename?: 'SetChatSpeechStylePayload';
  /** Chat */
  chat: Chat;
};

/** Input object for set chat tone of voice */
export type SetChatToneOfVoiceInput = {
  /** Chat ID */
  chatId: Scalars['ID'];
  /** Tone of voice */
  value: ToneOfVoice;
};

/** Set chat tone of voice payload */
export type SetChatToneOfVoicePayload = {
  __typename?: 'SetChatToneOfVoicePayload';
  /** Chat */
  chat: Chat;
};

/** Input object for sign in */
export type SignInInput = {
  /** Email */
  email: Scalars['String'];
  /** Password */
  password: Scalars['String'];
};

/** Payload object for sign in mutation */
export type SignInPayload = {
  __typename?: 'SignInPayload';
  /** Short live access token */
  accessToken: Scalars['String'];
  /** Current User */
  me?: Maybe<CurrentUser>;
  /** Long live refresh token */
  refreshToken: Scalars['String'];
};

/** Input object for sign out */
export type SignOutInput = {
  /** If true all sessions will reset */
  everywhere?: InputMaybe<Scalars['Boolean']>;
};

/** Payload object for sign out mutation */
export type SignOutPayload = {
  __typename?: 'SignOutPayload';
  /** Confirmation message */
  message: Scalars['String'];
};

/** Input object for sign up */
export type SignUpInput = {
  /** URL to avatar image */
  avatar?: InputMaybe<ImageUploader>;
  /** Email */
  email: Scalars['String'];
  /** First Name */
  firstName?: InputMaybe<Scalars['String']>;
  /** Last Name */
  lastName?: InputMaybe<Scalars['String']>;
  /** Password */
  password: Scalars['String'];
};

/** Payload object for sign up mutation */
export type SignUpPayload = {
  __typename?: 'SignUpPayload';
  /** Short live access token */
  accessToken: Scalars['String'];
  /** Current User */
  me?: Maybe<CurrentUser>;
  /** Long live refresh token */
  refreshToken: Scalars['String'];
};

/** Speech style type */
export enum SpeechStyle {
  /** Conversational speech style */
  Conversational = 'CONVERSATIONAL',
  /** Debate speech style */
  Debate = 'DEBATE',
  /** Demonstrative speech style */
  Demonstrative = 'DEMONSTRATIVE',
  /** Eulogy or funeeral speech style */
  EulogyOrFuneeral = 'EULOGY_OR_FUNEERAL',
  /** Explanatory speech style */
  Explanatory = 'EXPLANATORY',
  /** Farewell speech style */
  Farewell = 'FAREWELL',
  /** Improptu speech style */
  Improptu = 'IMPROPTU',
  /** Informative speech style */
  Informative = 'INFORMATIVE',
  /** Intertraining speech style */
  Intertraining = 'INTERTRAINING',
  /** Motivational speech style */
  Motivational = 'MOTIVATIONAL',
  /** Orartorical speech style */
  Orartorical = 'ORARTORICAL',
  /** Persuasive speech style */
  Persuasive = 'PERSUASIVE',
  /** Pitch speech style */
  Pitch = 'PITCH',
  /** Special ocassion speech style */
  SpecialOcassion = 'SPECIAL_OCASSION',
}

/** Tone of voice type */
export enum ToneOfVoice {
  /** Assertive */
  Assertive = 'ASSERTIVE',
  /** Conversational */
  Conversational = 'CONVERSATIONAL',
  /** Formal */
  Formal = 'FORMAL',
  /** Humorous */
  Humorous = 'HUMOROUS',
  /** Informal */
  Informal = 'INFORMAL',
  /** Motivating */
  Motivating = 'MOTIVATING',
  /** Optimistic */
  Optimistic = 'OPTIMISTIC',
  /** Respectful */
  Respectful = 'RESPECTFUL',
  /** Serious */
  Serious = 'SERIOUS',
}

/** Input object for update chat mutation */
export type UpdateChatInput = {
  /** Chat ID */
  id: Scalars['ID'];
  /** Chat name */
  name?: InputMaybe<Scalars['String']>;
};

/** Payload object for update chat mutation */
export type UpdateChatPayload = {
  __typename?: 'UpdateChatPayload';
  /** Chat */
  chat: Chat;
};

/** Payload object for update token mutation */
export type UpdateTokenPayload = {
  __typename?: 'UpdateTokenPayload';
  /** Short live access token */
  accessToken: Scalars['String'];
  /** Current User */
  me?: Maybe<CurrentUser>;
  /** Long live refresh token */
  refreshToken: Scalars['String'];
};

/** Input object for update user info */
export type UpdateUserInput = {
  /** Avatar data */
  avatar?: InputMaybe<ImageUploader>;
  /** Password */
  currentPassword?: InputMaybe<Scalars['String']>;
  /** Email */
  email?: InputMaybe<Scalars['String']>;
  /** First Name */
  firstName?: InputMaybe<Scalars['String']>;
  /** Last Name */
  lastName?: InputMaybe<Scalars['String']>;
  /** Password */
  password?: InputMaybe<Scalars['String']>;
};

/** Payload object for update user mutation */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** Current User */
  me: CurrentUser;
};
