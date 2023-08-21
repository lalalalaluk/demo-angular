export interface Author {
  id?: number;
  first_name: string;
  last_name: string;
  date_of_birth: Date | string;
  date_of_death: Date | string;
}