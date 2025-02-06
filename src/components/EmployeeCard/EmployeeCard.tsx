// import Button from "../Button/Button";
import { AgeData, EmployeeCardWrapper, JobData, Label, NameData, SurnameData } from "./styles";

function EmployeeCard() {
  return (
    <EmployeeCardWrapper>
      <Label>Name</Label>
      <NameData>Name</NameData>
      <Label>Surname</Label>
      <SurnameData>Surname</SurnameData>
      <Label>Age</Label>
      <AgeData>Age</AgeData>
      <Label>JobPosition</Label>
      <JobData>JobPosition</JobData>
    </EmployeeCardWrapper>
  );
}

export default EmployeeCard;