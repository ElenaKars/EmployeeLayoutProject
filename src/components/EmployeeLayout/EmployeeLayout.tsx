import { useNavigate } from "react-router";
import { EmployeeContextType, EmployeeLayoutProps } from "./types";
import {
    EmployeeLayoutComponent,
    Header,
    NavContainer,
    StyledNavLink,
    Main,
    LinkLogo,

}
    from "./styles";
import { createContext, useState } from "react";
import { EmployeeFormValues } from "../EmployeeForm/types";

export const EmployeeContext = createContext<EmployeeContextType>({
    data: { name: '', surname: '', age: '', job: '' },
    onDataChange: () => { }
});

function EmployeeLayout({ children }: EmployeeLayoutProps) {
    const [formValue, setformValue] = useState<EmployeeFormValues | undefined>({
        name: '',
        surname: '',
        age: '',
        job: ''
    });

    const navigate = useNavigate();
    return (
        <EmployeeLayoutComponent>
            <Header>
                <LinkLogo to='/'>AppLogo</LinkLogo>
                {/* <AppLogo onClick={() => navigate('/')}>AppLogo</AppLogo> */}
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