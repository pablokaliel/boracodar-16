import Link from "next/link";

function NotFound() {
  return (
    <div className="p-4">
      <h1 className="text-red-500">404</h1>
      <div>
        <span className="text-zinc-300">
          Ops,não conseguimos encontrar essa página
        </span>
        <p className="text-zinc-300">
          Clique no botão abaixo para ser redirecionado à Página Inicial
        </p>
      </div>
      <Link href="/">Ir para a Página Inicial</Link>
    </div>
  );
}

export default NotFound;
