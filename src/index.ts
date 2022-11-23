export const OK = Symbol("ok");
export const ERR = Symbol("err");
export const NONE = Symbol("none");

export type ResultType = typeof OK | typeof ERR;

export class Result<T, E> {
  private ok?: T | typeof NONE;
  private err?: E | typeof NONE;

  private constructor(ok?: T | typeof NONE, err?: E | typeof NONE) {
    this.ok = ok;
    this.err = err;
  }

  static Ok<T2, E2>(ok: T2): Result<T2, E2> {
    return new Result(ok);
  }

  static Err<T2, E2>(err: E2): Result<T2, E2> {
    return new Result<T2, E2>(NONE, err);
  }

  get value(): T {
    if (this.ok === NONE || this.ok === undefined || this.err) {
      throw new Error(this.err?.toString());
    }

    return this.ok;
  }

  get match(): ResultType {
    return this.ok !== undefined ? OK : ERR;
  }

  get isOk(): boolean {
    return this.match === OK;
  }

  get isErr(): boolean {
    return this.match === ERR;
  }
}
