export interface Repository {
    name: string;
    owner: {
      login: string;
    };
    url: string;
    description: string;
    openGraphImageUrl: string;
    homepageUrl: string;
    primaryLanguage: {
      name: string;
      color: string;
    };
    stargazerCount: number;
    forkCount: number;
  }