import { Dispatch, ReactNode, SetStateAction } from "react";
import { EmployeeFormValues } from "../EmployeeForm/types";

export interface EmployeeLayoutProps {
  children: ReactNode;
}

export interface EmployeeContextType {
  data: EmployeeFormValues;
  onDataChange?:
    | Dispatch<SetStateAction<EmployeeFormValues | undefined>>
    | (() => void);
}
