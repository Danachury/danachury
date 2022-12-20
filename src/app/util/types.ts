/**
 * Tuple that represent a pair of relation between two values
 */
export class Tuple<T1, T2> {

  private readonly _first: T1
  private readonly _second: T2

  private constructor(first: T1, second: T2) {
    this._first = first
    this._second = second
  }

  get first(): T1 {
    return this._first
  }

  get second(): T2 {
    return this._second
  }

  /**
   * public api to create an instance of this class
   * @param first first item of tuple
   * @param second second item of tuple
   * @returns {@link Tuple} instance with given params
   */
  static create<T1, T2>(first: T1, second: T2): Tuple<T1, T2> {
    return new Tuple(first, second)
  }
}
