import {useState} from "react";

export const errorForm = () => {
    const [errors, setErrors] = useState({});

    const checkErrors = (name) => {
        if(errors[name]) {
            const data = errors;
            delete data[name];
            setErrors(data);
        }
    }

    const getLabel = (name) => {
        return (
            <label htmlFor=""
                   className="text-[12px] text-red-600 absolute left-3 top-[-9px] px-1.5 bg-white font-consolas rounded-md">{errors[name]}</label>
        );
    }

    const isVisible = (name) => {
        return Object.keys(errors).length > 0 && errors[name];
    }


    return {errors, setErrors, checkErrors, getLabel, isVisible};
}