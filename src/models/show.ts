export type show = {
  id: number;
  name: string;
  type: string;
  language: string;
  genres: any[];
  rating: {
    average: null;
  };
  url: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string }; previousepisode: { href: string } };
};
