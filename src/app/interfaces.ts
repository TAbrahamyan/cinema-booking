export interface ISessions {
  id: number;
  date: string;
  bookingList: number[];
}

export interface IMovies {
  id: number;
  name: string;
  sessions: ISessions[];
}

export interface IHalls {
  id: number;
  name: string;
  seats: number;
  collapsed?: boolean;
  movies: IMovies[];
}

export interface ICinemas {
  id: number;
  name: string;
  collapsed?: boolean;
  halls: IHalls[];
}
