"use client";
import { useState, useEffect } from "react";

function getCountDownNumbers() {
  const endDate = new Date("2024-07-13");
  const now = new Date();

  const totalSeconds = Math.floor((endDate - now) / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  return `${days} dagar, ${hours} timmar, ${minutes} minuter, ${seconds} sekunder`;
}

export default function HomePage() {
  const [countDownDate, setCountDownDate] = useState(getCountDownNumbers());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountDownDate(getCountDownNumbers());
    }, 1000);

    return () => clearInterval(countdownInterval); // cleanup on unmount
  }, []);

  return (
    <header>
      {/* <div
        className="bg-cover bg-center w-full h-screen grayscale opacity-25"
        style={{ backgroundImage: "url(/media/elincarro.jpeg)" }}
      ></div>
      <section className="absolute top-0 h-screen w-screen flex align-middle flex-col place-content-center items-center text-center px-2">
        <h1 className="font-serif italic">
          Caroline & Elin 30år - Save the date
        </h1>
        <p className="uppercase text-2xl font-bold">{countDownDate}</p>
        <p className="font-serif">2024-07-13</p>
      </section> */}
    </header>
  );
}
