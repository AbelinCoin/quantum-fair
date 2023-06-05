export interface CreateData {
  status: number;
  message: string;
  result: {
    0: {
      contractAddress: string;
    };
  };
}

export interface Queries {
  status: number;
  data: string;
}
