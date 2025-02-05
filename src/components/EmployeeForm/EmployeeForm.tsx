import { createContext } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ButtonWrapper, EmployeeFormStyled, EmployeeFormWrapper, InputsWrapper } from "./styles";
import { EmployeeFormValues } from "./types";



function EmployeeForm() {
    const schema = Yup.object().shape({
        name: Yup.string().required('Field Full Name is required')
            .min(5, "Full Name must be at least 5 characters")
            .max(50, "Full Name must be at most 50 characters")
            .matches(/^[a-zA-Z\s]*$/, "Job Title must only contain letters and spaces")
            .typeError("Full name must be a string"),
        surname: Yup.string().required('Field Full Name is required')
            .min(5, "Full Name must be at least 5 characters")
            .max(50, "Full Name must be at most 50 characters")
            .matches(/^[a-zA-Z\s]*$/, "Job Title must only contain letters and spaces")
            .typeError("Full name must be a string"),
        age: Yup.number().required('Field Age is required')
            .typeError('Age must be a number')
            .min(18, 'Age must be at least 18')
            .max(80, 'Age must be at most 80'),
        job: Yup.string().max(30, 'Job Title must be at most 30 characters')
            .matches(/^[a-zA-Z\s]*$/, "Job Title must only contain letters and spaces")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            age: '',
            job: '',
        } as EmployeeFormValues,
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values: EmployeeFormValues) => {
            console.table(values);
        }
    });
    return (
        <EmployeeFormWrapper>
            <EmployeeFormStyled>
                <InputsWrapper>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Enter employee Name"
                        label="Name*"
                        type="text"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        id="surname"
                        name="surname"
                        placeholder="Enter employee Surname"
                        label="Surname*"
                        type="text"
                        value=""
                        onChange={() => { }} />
                    <Input
                        id="age"
                        name="age"
                        placeholder="Enter employee age"
                        label="Age*"
                        type="number"
                        value=""
                        onChange={() => { }}
                    />
                    <Input
                        id="job"
                        name="job"
                        placeholder="Enter employee Position"
                        label="Job Position"
                        type="text"
                        value=""
                        onChange={() => { }} />
                </InputsWrapper>
                <ButtonWrapper>
                    <Button name="Create" type="submit" />
                </ButtonWrapper>
            </EmployeeFormStyled>
        </EmployeeFormWrapper>
    );
}

export default EmployeeForm;