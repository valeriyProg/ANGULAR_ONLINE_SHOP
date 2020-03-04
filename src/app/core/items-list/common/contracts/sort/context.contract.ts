import SortStrategyContract from "./sort.strategy.contract";

export default abstract class ContextContract<T> {
  protected abstract strategy: SortStrategyContract<T>;
  abstract setStrategy(strategy: SortStrategyContract<T>);
  abstract sort(data: T[], filter: string): T[];
}
