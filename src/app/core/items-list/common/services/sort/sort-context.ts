import {Injectable} from "@angular/core";
import ContextContract from "../../contracts/sort/context.contract";
import SortStrategyContract from "../../contracts/sort/sort.strategy.contract";

@Injectable()
export class SortContext<T> extends ContextContract<T>{
  protected strategy: SortStrategyContract<T>;

  setStrategy(strategy: SortStrategyContract<T>) {
    this.strategy = strategy;
  }

  sort(data: T[], filter: string): T[] {
    return this.strategy.execute(data, filter);
  }
}
