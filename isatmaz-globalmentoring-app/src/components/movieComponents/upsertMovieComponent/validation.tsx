import * as yup from 'yup';

export const MovieSchema = yup.object().shape({
    title: yup
        .string()
        .required('Field Required')
        .min(2, 'Please provide a title with at least 2 characters'),
    release_date: yup.date().required('Field Required'),
    poster_path: yup
        .string()
        .required('Field Required')
        .url('Provide a valid URL'),
    vote_average: yup
        .number()
        .required('Field Required')
        .positive()
        .max(10, '10 is the maximum score'),
    runtime: yup.number().required('Field Required').integer().positive(),
    overview: yup.string().required('Field Required'),
});