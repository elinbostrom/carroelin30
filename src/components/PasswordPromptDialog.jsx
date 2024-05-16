"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const PasswordPromptDialog = () => {
 const [loading, setLoading] = useState(false);

 const { register, handleSubmit} = useForm()

const onSubmit = async (data) => {
 setLoading(true);

 const request = await fetch(`/api/auth`, {
 body: JSON.stringify({...data}),
 headers: {"Content-Type": "application/json"},
 method: "post",
 });

if (request.status !== 200)  {
 setPasswordIncorrect(true)
 setLoading(false)
 return 
}

window.location.reload();
};

return (
   <form onSubmit={handleSubmit(onSubmit)} className="absolute top-0 w-full px-4 grid gap-4 lg:max-w-128 z-10 h-full content-center">
     <label htmlFor="password">Lösenord:</label>
     <input
     type="password"
     id="password"
     className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
     {...register("password", {required:true})}
     />
        <button className="w-full hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
   </form>
 );
};

export default PasswordPromptDialog;