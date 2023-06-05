export interface CreateData {
  status: number;
  message: string;
  result: {
    0: {
      contractAddress: string;
    };
  };
}

export interface Create {
  status: number;
  data: string;
}
