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

interface IRaffleCardProps {
  id: number;
  address: string;
  endTime: Date;
}

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}