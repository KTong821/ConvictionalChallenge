export declare type Result<T, E> = Ok<T, E> | Err<T, E>;
export declare class Ok<T, E> {
    readonly value: T;
    constructor(value: T);
    isOk(): this is Ok<T, E>;
    isErr(): this is Err<T, E>;
}
export declare class Err<T, E> {
    readonly error: E;
    constructor(error: E);
    isOk(): this is Ok<T, E>;
    isErr(): this is Err<T, E>;
}
export declare namespace Result {
    const ok: <T, E>(value: T) => Result<T, E>;
    const err: <T, E>(error: E) => Result<T, E>;
}
