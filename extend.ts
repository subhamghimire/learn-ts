type Bit = 0 | 1;

type moreBit<A extends Bit> = A extends 0 ? 0 : 1;

type whatso = moreBit<0>;
