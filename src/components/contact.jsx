"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import {useState} from 'react'

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState(null)

  async function onSubmit(data) {
    const res = await sendEmail(data);
    if(res?.name) {
      setName(res.name);
    }
  }

  if(name) {
    return <p className="font-bold text-3xl text-center">{`${name} din plats på festen är säkrad! Vi är så glada att du vill fira med oss! Mer information kommer.`}</p>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full p-4 bg-slate-100 rounded-md max-h-128 overflow-y-scroll mb-6">
      <div className="mb-5">
        <label
          htmlFor="firstName"
          className="mb-3 block text-base font-medium text-black"
        >
          Förnamn
        </label>
        <input
          type="text"
          placeholder="Elin"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:bg-orange-100 focus:shadow-md"
          {...register("firstName", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="lastName"
          className="mb-3 block text-base font-medium text-black"
        >
          Efternamn
        </label>
        <input
          type="text"
          placeholder="Kråik"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:bg-orange-100 focus:shadow-md"
          {...register("lastName", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="phone"
          className="mb-3 block text-base font-medium text-black"
        >
          Mobilnummer
        </label>
        <input
          type="phone"
          placeholder="070-777 77 77"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:bg-orange-100 focus:shadow-md"
          {...register("phone", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="plusOnes"
          className="block text-base font-medium text-black mb-4"
        >
         Jag tar med mig ... buddies
          <p className="text-black italic text-sm pt-2">Pssst... de är okej om du ej vet! Men vi vill ha ett hummm.</p>
        </label>
        <div className="flex align-middle gap-2">

        <input
          type="radio"
          value="+1"
          id="+1"
          {...register("plusOnes", { required: true })}
          />
          <label htmlFor="+1" className="text-black">+1</label>
          </div>
<div className="flex align-middle gap-2">

        <input
          type="radio"
          value="+2"
          id="+2"
          {...register("plusOnes", { required: true })}
          />
          <label htmlFor="+2" className="text-black">+2</label>
          </div>
         
          <div className="flex align-middle gap-2">

        <input
          type="radio"
          value="+3"
          id="+3"
          {...register("plusOnes", { required: true })}
          />
          <label htmlFor="+3" className="text-black">+3</label>
          </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="song"
          className="mb-3 block text-base font-medium text-black"
        >
          Favoritlåt att dansa till
        </label>
        <input
          type="text"
          placeholder="Maja min maja - Electric banana band"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:bg-orange-100 focus:shadow-md"
          {...register("song")}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="hobby"
          className="mb-3 block text-base font-medium text-black"
        >
          Hobby
        </label>
        <input
          type="text"
          placeholder="Dreja krukor...."
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:bg-orange-100 focus:shadow-md"
          {...register("hobby", {required: true})}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="wish"
          className="mb-3 block text-base font-medium text-black"
        >
          Min högsta önskan
        </label>
        <input
          type="text"
          placeholder="Vinna på lotto...."
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:bg-orange-100 focus:shadow-md"
          {...register("wish", {required: true})}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block text-base font-medium text-black"
        >
         Extra kommentar
        </label>
        <span className="italic text-black font-sm opacity-50 mb-3">Alleriger, pepp...</span>
        <textarea
          rows={4}
          placeholder="Skriv en extra kommentar..."
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:bg-orange-100 focus:shadow-md"
          {...register("message")}
        ></textarea>
      </div>
      <div>
        <button className="w-full hover:shadow-form rounded-md bg-orange-300 py-3 px-8 text-base font-semibold text-white outline-none">
          Skicka
        </button>
      </div>
    </form>
  );
};

export default Contact;
