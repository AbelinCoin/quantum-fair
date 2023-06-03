export interface CreateData{
  status: number;
  message: string;
  result: {
    0: {
      contractAddress: string;
    };
  };
}