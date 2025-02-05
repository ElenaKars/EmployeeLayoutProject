import { useNavigate } from "react-router";
import { EmployeeLayoutProps } from "./types";
import {
    EmployeeLayoutComponent,
    Header,
    NavContainer,
    StyledNavLink,
    Main
}
    from "./styles";

// export const EmployeeContext = createContext<EmployeeContextType>({
//     inputData: '',
//     onChange: () => { },
// });

function EmployeeLayout({ children }: EmployeeLayoutProps) {
    const navigate = useNavigate();
    return (
        <EmployeeLayoutComponent>
            <Header>
                <NavContainer>
                    <StyledNavLink to='/'
                        style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" }
                        )}>Create Employee</StyledNavLink>
                    <StyledNavLink to='/employeeCard'
                        style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" }
                        )}>Employee</StyledNavLink>
                </NavContainer>
            </Header>
            <Main>{children}</Main>
        </EmployeeLayoutComponent>
    );
}

export default EmployeeLayout;