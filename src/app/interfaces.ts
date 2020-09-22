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
  isShowMenu?: boolean;
  movies: IMovies[];
}

export interface ICinemas {
  id: number;
  name: string;
  isShowMenu?: boolean;
  halls: IHalls[];
}
