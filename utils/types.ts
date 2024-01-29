import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

export type UserData = {
  personalInformation: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  };
  citiesTraveled: {
    dateArrived: string;
    cityName: string;
  }[];
};

export type FormGroupProps = {
  value: string;
  updateValue: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  showMessage: boolean;
  label: string;
  type?: "text" | "date";
  top?: number;
};
