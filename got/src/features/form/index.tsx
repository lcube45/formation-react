import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import Data from '../../data/data';

interface FormProps {

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
            //console.log(JSON.stringify(values, null, 2));
            data.addPerson(values);
            console.log(data.persons);
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
