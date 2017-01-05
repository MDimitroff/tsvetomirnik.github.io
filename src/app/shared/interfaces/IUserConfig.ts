import { ISocialIconConfig } from './ISocialIconConfig';

export interface IUserConfig {
  githubUsername: string;
  name: string;
  username: boolean|string;
  bio: boolean|string;
  avatarUrl: string;
  location: boolean|string;
  company: boolean|string;
  socialIcons: ISocialIconConfig[];
}