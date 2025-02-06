import { useContext } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ButtonWrapper, EmployeeFormWrapper, InputsWrapper } from "./styles";
import { EmployeeFormValues } from "./types";
import { EmployeeContext } from '../EmployeeLayout/EmployeeLayout';
import { useNavigate } from "react-router";



function EmployeeForm() {
    const navigate = useNavigate();
    const { onDataChange } = useContext(EmployeeContext);

    const schema = Yup.object().shape({
        name: Yup.string().required('Field Full Name is required')
            .min(2, "Full Name must be at least 5 characters")
            .max(50, "Full Name must be at most 50 characters")
            .matches(/^[a-zA-Zа-яА-ЯёЁ\s]*$/, "Job Title must only contain letters and spaces")
            .typeError("Full name must be a string"),
        surname: Yup.string().required('Field Surname is required')
            .max(15, "Full Name must be at most 50 characters")
            .matches(/^[a-zA-Zа-яА-ЯёЁ\s]*$/, "Job Title must only contain letters and spaces")
            .typeError("Full name must be a string"),
        age: Yup.number().required('Field Age is required')
            .typeError('Age must be a number')
            .min(18, 'Age must be at least 18')
            .max(80, 'Age must be at most 80'),
        job: Yup.string().max(30, 'Job Title must be at most 30 characters')
            .matches(/^[a-zA-Zа-яА-ЯёЁ\s]*$/, "Job Title must only contain letters and spaces")
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
            onDataChange(values);
            navigate("/employeeCard");
        }
    });
    return (
        <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
            <InputsWrapper>
                <Input
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    label="Name*"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                />
                <Input
                    id="surname"
                    name="surname"
                    placeholder="Enter Surname"
                    label="Surname*"
                    type="text"
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                    error={formik.errors.surname}
                />
                <Input
                    id="age"
                    name="age"
                    placeholder="Enter Age"
                    label="Age*"
                    type="number"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    error={formik.errors.age}
                />
                <Input
                    id="job"
                    name="job"
                    placeholder="Enter Position"
                    label="Job Position"
                    type="text"
                    value={formik.values.job}
                    onChange={formik.handleChange}
                    error={formik.errors.job}
                />
            </InputsWrapper>
            <ButtonWrapper>
                <Button name="Create" type="submit" />
            </ButtonWrapper>
        </EmployeeFormWrapper>
    );
}

export default EmployeeForm;