import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import Data from '../../data/data';

interface FormProps {
    addPerson: (name: string, img: string) => void
}

const MyForm: React.FC<FormProps> = (props: FormProps) => {

    const data = new Data();

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            img: '',
        },
        onSubmit: values => {
            props.addPerson(values.name, values.img)
        },
    });

    return(

        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="id">Id</label>
            <input
                id="id"
                name="id"
                type="id"
                onChange={formik.handleChange}
                value={formik.values.id}
            />
            <input
                id="name"
                name="name"
                type="name"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <input
                id="img"
                name="img"
                type="img"
                onChange={formik.handleChange}
                value={formik.values.img}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default MyForm;
