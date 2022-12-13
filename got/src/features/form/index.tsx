import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import Data from '../../data/data';

interface FormProps {
    addPerson: (name: string) => void
}

const MyForm: React.FC<FormProps> = (props: FormProps) => {

    const data = new Data();

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: values => {
            props.addPerson(values.name)
        },
    });

    return(

        <form onSubmit={formik.handleSubmit}>
            <p>
                <label>Name : </label>
                <input
                    id="name"
                    name="name"
                    type="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </p>
            <button type="submit">Submit</button>
        </form>
    )
}

export default MyForm;
