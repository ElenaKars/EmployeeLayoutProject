import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const EmployeeLayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-family: Lato, sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 80px;
  background-color: white;
  height: 120px;
`;

export const LinkLogo = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const NavContainer = styled.nav`
  display: flex;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 28px;
  color: black;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 94px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #6f6f6f;
  background-color: #112233;
`;
