import Image from "next/image";

import add from "./../../public/add.svg";
import trash from "./../../public/trash.svg";
import search from "./../../public/search.svg";
import pencil from "./../../public/pencil.svg";

function Header() {
  return (
    <div className="bg-gray-500 dark:bg-gray-950 p-10 max-md:px-4 max-md:py-10">
      <div className="flex justify-between">
        <h1 className="text-xl">Meus contatos</h1>
        <div className="flex items-center gap-4">
          <Image src={add} alt="adicionar contatos" />
          <Image src={pencil} alt="editar contatos" />
          <Image src={trash} alt="excluir contatos" />
        </div>
      </div>

      <div className="h-10 mt-6 bg-slate-300 dark:bg-gray-900 max-md:w-full flex items-center px-6 py-4">
        <div className="flex w-full">
          <button className="p-2.5 hover:bg-slate-400/50 dark:hover:bg-slate-800/40">
            <Image className="w-5 h-w-5" src={search} alt="botão pesquisar" />
          </button>
          <input
            className="w-full h-full p-2.5 bg-transparent text-xs"
            placeholder="Busque por nome ou por dados de contato..."
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
