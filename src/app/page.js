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
        <div className="absolute top-0 md:top-48 grid lg:grid-cols-2 w-full px-4 lg:px-40 gap-8 items-center content-center animate-fadeIn my-6">
          <div className="text-zinc-300 text-center grid gap-4 pt-4 md:pt-0">
            <div>
              <p className="italic text-xl font-body">Carro & Elin</p>
              <h1 className="pb-6 text-2xl font-bold uppercase animate-pulse">
                Dirty Thirty Summerbash!
              </h1>
            </div>
            <div>
              <p>13 Juli 2024</p>
              <p>Österängs Gård</p>
            </div>
          </div>
          <Contact />
        </div>
      )}
    </main>
  );
}
