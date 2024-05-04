import {useState} from "react";

export const form = (data = {}) => {

    const [formData, setFormData] = useState(data);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
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
        confirm_password: ""
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
            errors.firstname = "First Name is required!";
        }
        if(!value && key === 'lastname') {
            errors.lastname = "Last Name is required!";
        }
        if(!value && key === 'email') {
            errors.email = "Email is required!";
        }
        if(value && key === 'email' && !emailFormat.test(value)) {
            errors.email = "Invalid email format!";
        }
        if(!value && key === 'password') {
            errors.password = "Password is required!";
        }
        if(!value && key === 'confirm_password') {
            errors.confirm_password = "Confirm Password is required!";
        }
        if(value && key === 'confirm_password' && value !== formData['password']) {
            errors.confirm_password = "Password dont match!";
        }
        if(!value && key === 'course') {
            errors.course = "Course is required!";
        }
        if(!value && key === 'department') {
            errors.department = "Department is required!";
        }
        if(!value && key === 'year') {
            errors.year = "Year is required!";
        }
        if(!value && key === 'id_number') {
            errors.id_number = "ID number is required!";
        }
    }

    return errors;
}

export const courses = (department) => {
    const datas = {
        CSP: ['BSIT', 'BSCS', 'BSIT-CA', 'BLISS'],
        ASP: ['BSAS'],
        TEP: ['BSEE', 'BSSE', 'DEPED'],
        ETP: ['BSCE', 'BSCI'],
        NP: ['BSN'],
        CJEP: ['BSCRIM'],
        AP: ['BSA'],
        BAP: ['BSBA'],
    }

    return datas[department];
}