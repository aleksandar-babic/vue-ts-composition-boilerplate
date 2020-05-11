import * as _ from "lodash";

// Example of generic shared util pure function
export function getRandomElement<T>(arr: Array<T>): T {
  return _.sample(arr) as T;
}
