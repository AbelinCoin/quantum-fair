import { ReactElement } from "react";

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

export interface RaffleProps {
  id: string;
  address: string;
  owner: string;
  startTime: string;
  endTime: string;
  status: string;
}

export interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}
