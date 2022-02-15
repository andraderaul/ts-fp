export class Maybe<T> {
  constructor(private value: T | null) {}

  static some<V>(value: V) {
    if (value === null || value === undefined) {
      throw Error("Provided value must not be empty");
    }

    return new Maybe(value);
  }

  static none<T>() {
    return new Maybe<T>(null);
  }

  static fromValue<T>(value: T) {
    return value ? Maybe.some(value) : Maybe.none<T>();
  }

  isNothing() {
    return this.value === null || this.value === undefined;
  }

  map<R>(fn: (wrapped: T) => R): Maybe<R> {
    if (this.value === null) return Maybe.none<R>();
    return Maybe.fromValue(fn(this.value));
  }

  flatMap<R>(fn: (wrapped: T) => Maybe<R>): Maybe<R> {
    if (this.value === null) return Maybe.none<R>();
    return fn(this.value);
  }

  getOrElse(defaultValue: T) {
    if (this.isNothing()) return defaultValue;
    return this.value;
  }
}
