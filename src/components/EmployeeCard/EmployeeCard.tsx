import Button from "../Button/Button";
import { AgeData, ButtonWrapper, EmployeeCardWrapper, EmployeesCards, EmployeeCard, JobData, Label, NameData, SurnameData } from "./styles";

function EmployeeCard() {
  return (
    <EmployeeCardWrapper>
      <EmployeesCards>
        <EmployeeCard>
          <Label>Name</Label>
          <NameData>Name</NameData>
          <Label>Surname</Label>
          <SurnameData>Surname</SurnameData>
          <Label>Age</Label>
          <AgeData>Age</AgeData>
          <Label>JobPosition</Label>
          <JobData>JobPosition</JobData>
          <Button name="Delete"></Button>
        </EmployeeCard>
        <EmployeeCard>
          <Label>Name</Label>
          <NameData>Name</NameData>
          <Label>Surname</Label>
          <SurnameData>Surname</SurnameData>
          <Label>Age</Label>
          <AgeData>Age</AgeData>
          <Label>JobPosition</Label>
          <JobData>JobPosition</JobData>
          <Button name="Delete"></Button>
        </EmployeeCard>
      </EmployeesCards>
      <ButtonWrapper>
        <Button name="Remove All Employees"></Button>
      </ButtonWrapper>
    </EmployeeCardWrapper>
  );
}

export default EmployeeCard;