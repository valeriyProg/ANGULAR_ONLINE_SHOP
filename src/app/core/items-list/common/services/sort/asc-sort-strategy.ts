import {Injectable} from "@angular/core";
import SortStrategyContract from "../../contracts/sort/sort.strategy.contract";

@Injectable()
export class AscSortStrategy<T> implements SortStrategyContract<T>{
  execute(data: T[], filter: string): T[] {
    //
    //TODO: TO DELETE THIS PART AFTER REFACTOR PRODUCT MODEL AND ENDPOINT. START
    //
    if (filter === 'name') {
      return data.sort((a, b) => {
        if (a[filter].title > b[filter].title) {
          return - 1
        } else if (a[filter].title < b[filter].title) {
          return 1
        } else {
          return 0
        }
      });
    }
    // END
    return data.sort((a, b) => {
      if (a[filter] > b[filter]) {
        return - 1
      } else if (a[filter] < b[filter]) {
        return 1
      } else {
        return 0
      }
    });
  }
}
