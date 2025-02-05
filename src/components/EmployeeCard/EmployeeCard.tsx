import { Age, EmployeeCardWrapper, JobPosition, Name, Surname } from "./styles";

function EmployeeCard() {
  return (
    <EmployeeCardWrapper>
      <Name>Name</Name>
      <Surname>Surname</Surname>
      <Age>Age</Age>
      <JobPosition>JobPosition</JobPosition>
    </EmployeeCardWrapper>
  );
}

export default EmployeeCard;