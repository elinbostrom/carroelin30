import Contact from "@/components/contact";
import { cookies } from "next/headers";
import PasswordPromptDialog from "@/components/PasswordPromptDialog";

export default function Home() {
  const cookiesStore = cookies();
  const loginCookies = cookiesStore.get(process.env.PASSWORD_COOKIE_NAME);
  const isLoggedIn = !!loginCookies?.value;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div
        className="bg-cover bg-center w-full h-screen grayscale opacity-25"
        style={{ backgroundImage: "url(/media/elincarro.jpeg)" }}
      ></div>
      {!isLoggedIn ? (
        <PasswordPromptDialog />
      ) : (
        <div className="absolute top-0 md:top-48 grid  w-full px-4  items-center content-center animate-fadeIn my-6">
          <caption className="italic text-xl font-body">Carro & Elin</caption>
          <h1 className="text-2xl font-bold uppercase animate-pulse m-auto text-center">
            Dirty Thirty Summerbash!
          </h1>
          <div className="bg-white rounded-md my-2 text-black p-4 md:max-w-128 mx-auto">
            <ul>
              <li>
                <strong>Datum:</strong> 13 juli
              </li>
              <li>
                <strong>Tid:</strong> 14:00
              </li>
              <li>
                <strong>Klädkod:</strong> Sommarfin 🌻☀️
              </li>
              <li>
                <strong>Skjuts från Gudö:</strong> 14:15 , det är ca 3km
                promenad från Gudö busshållplats. Vill du ha skjuts så får du
                gärna säga till! Skriv till{" "}
                <a
                  href="mailto:helloelinbostrom@gmail.com"
                  className="italic underline"
                >
                  helloelinbostrom@gmail.com
                </a>{" "}
                för att boka skjuts.
              </li>
            </ul>
            <hr className="my-4" />
            <div className="grid gap-4 text-center px-4">
              <p>
                Vi ser framemot att fira 30 år med er! Med skratt, påhitt och
                dans i lite "gammaldags" hemmafest anda.
              </p>
              <p>
                Mat & dryck till maten bjuds på, men ta med extra dryck om du är
                extra partysugen 🎉
              </p>
              <p className="font-bold">Välkomna! 😃💃🏼</p>
            </div>
            <hr className="my-4" />
            <p className="text-sm">
              Har du inte registrerat dig än? Eller är du en "+1" och behöver
              fylla i information? Klicka på knappen nedan:
            </p>
            <a href="/register">
              <p className="rounded-md py-2 px-4 bg-orange-300 text-white font-bold mt-4 text-center hover:cursor-pointer">
                Registrera dig
              </p>
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
