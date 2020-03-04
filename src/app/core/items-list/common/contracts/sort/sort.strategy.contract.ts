export default interface SortStrategyContract<T> {
  execute(data: T[], filter: string): T[];
}
