export interface ILaunch {
  date_utc: string;
  details: string;
  id: string;
  name: string;
  success: boolean;
  links: {
    patch: {
      large: string
    }
  }
}