// import Button from "../Button/Button";
import { useContext } from "react";
import { AgeData, EmployeeCardWrapper, JobData, Label, NameData, SurnameData } from "./styles";
import { EmployeeContext } from "../EmployeeLayout/EmployeeLayout";

function EmployeeCard() {
  const { data } = useContext(EmployeeContext);

  return (
    <EmployeeCardWrapper>
      <Label>Name</Label>
      <NameData>{data?.name}</NameData>
      <Label>Surname</Label>
      <SurnameData>{data?.surname}</SurnameData>
      <Label>Age</Label>
      <AgeData>{data?.age}</AgeData>
      <Label>JobPosition</Label>
      <JobData>{data?.job}</JobData>
    </EmployeeCardWrapper>
  );
}

export default EmployeeCard;