type AnyFunction = (...args: unknown[]) => unknown;
type Booleanish = true | false | "true" | "false";

export const isDev = () => process.env.NODE_ENV !== "production";
export const isArray = (v: unknown): v is unknown[] => Array.isArray(v);
export const isBoolean = (v: unknown): v is boolean =>
	v === true || v === false;
export const isBooleash = (v: unknown): v is Booleanish =>
	v === "true" || v === "false" || isBoolean(v);
export const isObjectLike = (v: unknown): v is Record<string, unknown> =>
	v != null && typeof v === "object";
export const isObject = (v: unknown): v is Record<string, unknown> =>
	isObjectLike(v) && !isArray(v);
export const isNumber = (v: unknown): v is number =>
	typeof v === "number" && !Number.isNaN(v);
export const isString = (v: unknown): v is string => typeof v === "string";
export const isFunction = (v: unknown): v is AnyFunction =>
	typeof v === "function";
export const isNull = (v: unknown): v is null | undefined => v == null;
