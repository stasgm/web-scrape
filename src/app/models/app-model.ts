/* export interface IApp {
  isLoading: boolean;
  hasErrored: boolean;
}
 */
export interface IOptions {
  currencies: string[];
}

export interface IProfile {
  name: string;
  options: IOptions;
}
