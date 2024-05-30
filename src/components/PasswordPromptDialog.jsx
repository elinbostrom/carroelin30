"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const PasswordPromptDialog = () => {
 const [loading, setLoading] = useState(false);
 const [passwordIncorrect, setPasswordIncorrect] = useState(false);

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
  <div className="absolute top-0 w-full h-full p-4 grid content-center text-center justify-center ">
    <caption className="italic text-xl font-body">Carro & Elin</caption>
    <h1 className="text-2xl font-bold uppercase animate-pulse">Dirty Thirty Summerbash!</h1>
    <p>Dags att anmäla sig till sommarens höjdpunkt!</p>
    <p className="mt-2 font-bold text-red-500 pb-6">OSA senast 16/6</p>

    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid gap-4 lg:max-w-128 z-10 h-full content-center bg-slate-100 p-4 text-black rounded-md">
      <label htmlFor="password" className="font-bold">Lösenord:</label>
      <input
      type="password"
      id="password"
      className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:bg-orange-100 focus:shadow-md"
      {...register("password", {required:true})}
      />
          <button className="w-full hover:shadow-form rounded-md bg-orange-300 py-3 px-8 text-base font-semibold text-white outline-none">
            Logga in
          </button>
    </form>
    <p className="pt-4 opacity-50">Lösenordet hittar du i inbjudan</p>
    {passwordIncorrect && <p className="text-red-500">Fel lösenord, försök igen</p>}
     </div>
 );
};

export default PasswordPromptDialog;