import Contact from "@/components/contact";
import { cookies } from "next/headers";
import PasswordPromptDialog from "@/components/PasswordPromptDialog";

export default function Home() {
  const cookiesStore = cookies();
  const loginCookies = cookiesStore.get(process.env.PASSWORD_COOKIE_NAME);
  const isLoggedIn = !!loginCookies?.value;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center  bg-white">
      <div
        className="bg-cover bg-center w-full h-screen grayscale opacity-25"
        style={{ backgroundImage: "url(/media/elincarro.jpeg)" }}
      ></div>
      {!isLoggedIn ? (
        <PasswordPromptDialog />
      ) : (
        <div className="absolute top-0 grid lg:grid-cols-2 w-full px-4 lg:px-40 gap-8 items-center h-full content-center">
          <div className="text-zinc-300 text-center grid gap-4">
            <p>Carro & Elin</p>
            <h1 className="uppercase font-bold">Dirty Thirty Summerbash!</h1>
            <p>
              test about the party hihihih test about the party hihihih test
              about the party hihihih test about the party hihihih test about
              the party hihihih test about the party hihihih test about the
              party hihihih
            </p>
          </div>
          <Contact />
        </div>
      )}
    </main>
  );
}
