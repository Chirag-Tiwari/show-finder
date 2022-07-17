export type actor = {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: Date;
  gender: string;
  image: Image;
  updated: number;
};

type Country = {
  name: string;
  code: string;
  timezone: string;
};

type Image = {
  medium: string;
  original: string;
};
