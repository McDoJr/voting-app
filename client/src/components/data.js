import {useState} from "react";

export const form = (data = {}) => {

    const [formData, setFormData] = useState(data);

    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === "student_id" && !/[0-9]/.test(value.charAt(value.length - 1))) {
            return;
        }
        setFormData({...formData, [name]: name === "terms" ? e.target.checked : value});
    }

    return {formData, setFormData, handleChange};
}

export const signupForm = () => {
    return form({
        student_id: "",
        firstname: "",
        lastname: "",
        course: "",
        year: "",
        department: "",
        email: "",
        password: "",
        confirm_password: "",
        terms: false
    });
}

export const signinForm = () => {
    return form({
        email: "",
        password: ""
    });
}

export const validate = (formData) => {
    return Object.values(formData).every(data => data !== "");
}

export const validateForm = (formData) => {

    const errors = {};
    const emailFormat = /^[a-z]+\.[a-z]+@urios\.edu\.ph$/;

    for(const key in formData) {
        const value = formData[key];
        if(!value && key === 'firstname') {
            errors.firstname = "Required!";
        }
        if(!value && key === 'lastname') {
            errors.lastname = "Required!";
        }
        if(!value && key === 'email') {
            errors.email = "Required!";
        }
        if(value && key === 'email' && !emailFormat.test(value) && value !== "admin") {
            errors.email = "Invalid Email!";
        }
        if(!value && key === 'password') {
            errors.password = "Required!";
        }
        if(!value && key === 'confirm_password') {
            errors.confirm_password = "Required!";
        }
        if(value && key === 'confirm_password' && value !== formData['password']) {
            errors.confirm_password = "Password dont match!";
        }
        if(!value && key === 'course') {
            errors.course = "Required!";
        }
        if(!value && key === 'department') {
            errors.department = "Required!";
        }
        if(!value && key === 'year') {
            errors.year = "Required!";
        }
        if(!value && key === 'student_id') {
            errors.student_id = "Required!";
        }
    }

    return errors;
}

export const departments = () => {
    return {
        CSP: ['BSIT', 'BSCS', 'BSIT-CA', 'BLISS'],
        ASP: ['BSAS'],
        TEP: ['BSEE', 'BSSE', 'DEPED'],
        ETP: ['BSCE', 'BSCI'],
        NP: ['BSN'],
        CJEP: ['BSCRIM'],
        AP: ['BSA'],
        BAP: ['BSBA'],
    }
}

export const courses = (department) => {
    return departments()[department];
}