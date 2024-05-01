import {useState} from "react";

export const form = () => {

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return {formData, setFormData, handleChange};
}