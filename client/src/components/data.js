import {useState} from "react";

export const form = (data = {}) => {

    const [formData, setFormData] = useState(data);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return {formData, setFormData, handleChange};
}

export const validate = (formData) => {
    for(let data in formData) {
        if(data === "") return true;
    }
    return false;
}