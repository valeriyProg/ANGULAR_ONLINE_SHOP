export default interface CategoryDataModel {
  id: string;
  name: string;
  filter: { [key:string]: string[] | number[] };
  screen: string;
  description: string | string[];
  page?: string;
}
