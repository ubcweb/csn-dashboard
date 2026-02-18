'use client'
import React, { useState } from 'react'
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Checkbox } from "@heroui/react";
import { useRouter } from 'next/navigation';
import { FiArrowUpRight } from "react-icons/fi";

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    rememberMe: Yup.boolean()
});

const LoginForm = () => {
    const [initialValues, setInitialValues] = useState({
        email: "",
        password: "",
        rememberMe: false
    });

    const router = useRouter();

    const handleSubmit = (values: any) => {
        console.log("Form submitted:", values);
        // Handle login logic here
        // After successful login, redirect to dashboard
        router.push('/dashboard');
    };

    return (
        <div className='xl:px-5 2xl:px-7 w-full sm:max-w-[500px] xl:max-w-full flex flex-col gap-8 md:gap-10 2xl:gap-14 items-center'>
            <div className='flex flex-col gap-4 md:gap-5 xl:gap-7 items-center'>
                <div>
                    <Image src="/Login-logo-icon.svg" alt="Image" width={44} height={50} className='w-[30px] xl:w-[35px]' />
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='font-semibold Medium-heading tracking-[-1px] text-[#10103E]'>Welcome to CSN</h2>
                    <p className='font-normal Small-text text-[#7A8799]'>Quote, Book and Ship. All-in-one place.</p>
                </div>
            </div>
            <div className='w-full'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({ isSubmitting }) => (
                        <Form className='w-full flex flex-col gap-6 xl:gap-7'>
                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-col gap-1.5'>
                                    <label htmlFor='email' className='Label-text'>Email</label>
                                    <Field
                                        type='email'
                                        name='email'
                                        placeholder='Enter email'
                                        className='Input-field'
                                    />
                                    <ErrorMessage name="email" component="div" className="Error-text" />
                                </div>
                                <div className='flex flex-col gap-1.5'>
                                    <div className='w-full flex gap-5 items-center justify-between'>
                                        <label htmlFor='password' className='Label-text'>Password</label>
                                        <button type="button" className='w-fit font-normal Little-text tracking-[1px] text-[#2D4059] hover:text-[#1739E5] Hover-effect cursor-not-allowed'>
                                            Forgot password?
                                        </button>
                                    </div>
                                    <Field
                                        type='password'
                                        name='password'
                                        placeholder='Enter password'
                                        className='Input-field'
                                    />
                                    <ErrorMessage name="password" component="div" className="Error-text" />
                                </div>
                                <Field name="rememberMe">
                                    {({ field }: any) => (
                                        <Checkbox
                                            isSelected={field.value}
                                            onChange={field.onChange}
                                            onBlur={field.onBlur}
                                            name={field.name}
                                            color="default"
                                            size='sm'
                                        >
                                            <p className='font-normal Small-text text-[#7A8799]'>Remember me</p>
                                        </Checkbox>
                                    )}
                                </Field>
                            </div>
                            <div className='flex flex-col gap-5 items-center'>
                                <button type='submit' disabled={isSubmitting} className='w-full py-3 font-semibold Medium-text tracking-[1px] Gradient-button'>
                                    LOGIN
                                </button>
                                <div className='flex gap-2 items-center'>
                                    <p className='font-normal Small-text text-[#7A8799]'>New Member?</p>
                                    <button type="button" className='w-fit flex gap-1 items-center font-semibold Small-text text-[#10103E] hover:text-[#1739E5] Hover-effect cursor-pointer'>
                                        Register now <FiArrowUpRight />
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default LoginForm