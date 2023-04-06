export interface IPhoto {
  id: string;
  downloads?: number;
  likes: number;
  description: string;
  tags?: { title: string }[];
  urls: { [key: string]: string };
  [key: string]: unknown;
}

export type TPhotos = IPhoto[];
