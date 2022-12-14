import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import Data from '../../service/service';
import * as Yup from 'yup'

const MyFormSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Trop court').required('Requis')
})

interface FormProps {
    addPerson: (name: string) => void
}

const MyForm: React.FC<FormProps> = (props: FormProps) => {

    const data = new Data();

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema: MyFormSchema,
        onSubmit: values => {
            props.addPerson(values.name)
        },
    });

    const setInputValue = useCallback(
        (key: any, value: any) =>
          formik.setValues({
            ...formik.values,
            [key]: value,
          }),
        [formik]
      );

    return(
        <form onSubmit={formik.handleSubmit}>
            <p>
                <label>Name <small>{formik.errors.name}</small></label>
                <br />
                <input
                    placeholder="Type your Name"
                    value={formik.values.name}
                    onChange={(e) => setInputValue("name", e.target.value)}
                />
            </p>
            <button type="submit" disabled={!formik.isValid}>Submit</button>
        </form>
    )
}

export default MyForm;
