declare module "typeit" {
  interface TypeItOptions {
    speed?: number;
    deleteSpeed?: number;
    loop?: boolean;
    afterComplete?: (instance?: any) => Promise<void> | void;
    lifeLike?: boolean;
    cursorChar?: string;
    [key: string]: unknown;
  }

  interface TypeItInstance {
    type(text: string, options?: Partial<TypeItOptions>): TypeItInstance;
    delete(chars?: number | null): TypeItInstance;
    pause(ms: number): TypeItInstance;
    break(): TypeItInstance;
    options(options: Partial<TypeItOptions>): TypeItInstance;
    go(): TypeItInstance;
    destroy(): void;
  }

  class TypeIt {
    constructor(element: HTMLElement, options?: TypeItOptions);
    type(text: string, options?: Partial<TypeItOptions>): TypeItInstance;
    delete(chars?: number | null): TypeItInstance;
    pause(ms: number): TypeItInstance;
    break(): TypeItInstance;
    options(options: Partial<TypeItOptions>): TypeItInstance;
    go(): TypeItInstance;
    destroy(): void;
  }

  export default TypeIt;
}

