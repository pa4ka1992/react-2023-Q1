export interface IPhoto {
  id: string;
  downloads?: number;
  likes: number;
  description: string;
  alt_description: string;
  tags?: { title: string }[];
  urls: TUrls;
  user: {
    id: string;
    username: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

type TUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
};

export type TPhotos = IPhoto[];

export interface ISearchRes {
  total: number;
  total_pages: number;
  results: TPhotos;
}
