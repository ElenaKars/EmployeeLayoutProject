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

    return (
        <EmployeeContext.Provider value={{ data: formValue, onDataChange: setformValue }}>
            <EmployeeLayoutComponent>
                <Header>
                    <LinkLogo to='/'>AppLogo</LinkLogo>
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
        </EmployeeContext.Provider>
    );
}

export default EmployeeLayout;