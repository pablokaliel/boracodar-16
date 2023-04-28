import Contacts from "./contacts";
import Header from "./header";

export default function Home() {
  return (
    <main className="grid h-screen place-content-center dark:bg-slate-800 bg-slate-300 dark:text-zinc-50">
      <div className="bg-gray-400 dark:bg-gray-900 max-w-[430px] w-full rounded overflow-hidden">
        <Header />
        <Contacts />
      </div>
    </main>
  );
}
