type Min = <T = number>(a: T, b: T) => T

export const min: Min = (a, b) => (b < a ? b : a)
