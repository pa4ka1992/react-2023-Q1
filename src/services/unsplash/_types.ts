export interface IPhoto {
  id: string;
  downloads?: number;
  color: string;
  width: number;
  height: number;
  views?: number;
  exif?: { name: string };
  likes: number;
  description: string;
  alt_description: string;
  created_at: string;
  location: { name: string };
  tags_preview?: { title: string }[];
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
  first_name: string;
  last_name: string;
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
