export interface IPhoto {
  id: string;
  downloads?: number;
  likes: number;
  description: string;
  alt_description: string;
  created_at: string;
  tags?: { title: string }[];
  urls: TUrls;
  user: TUser;
  [key: string]: unknown;
}

type TUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
};

type TUser = {
  id: string;
  username: string;
  profile_image: {
    small: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export type TPhotos = IPhoto[];

export interface ISearchRes {
  total: number;
  total_pages: number;
  results: TPhotos;
}
