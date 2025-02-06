import styled from "@emotion/styled";

// interface EmployeeCardProps{
//   children:
// }

export const EmployeeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmployeesCards = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
  padding: 30px;
`;
export const EmployeeCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 590px;
  height: 592px;
  padding: 60px;
  gap: 20px;
  border-radius: 4px;
  background-color: white;
`;
export const Label = styled.p``;

const CommonDataStyle = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #1c1c1c;
  margin-top: 8px;
`;

export const NameData = CommonDataStyle;
export const SurnameData = CommonDataStyle;
export const AgeData = CommonDataStyle;
export const JobData = CommonDataStyle;

export const ButtonWrapper = styled.div``;
