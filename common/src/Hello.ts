export interface Hello {
  message: string;
}

export const createHello = (message: string): Hello => ({
  message,
});

export const getMessage = (hello: Hello): string => hello.message;
