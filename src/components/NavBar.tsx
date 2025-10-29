import CustomLink from "./ui/CustomLink";

function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between px-6 py-4">
      {/* Nombre a la izquierda */}
      <h5 className="text-lg font-semibold">Juan Mera</h5>

      {/* Enlaces en el centro */}
      <div className="flex gap-8">
        <CustomLink text="Home" href="/" />
        <CustomLink text="About" href="/" />
        <CustomLink text="Projects" href="/" />
      </div>

      {/* Botón a la derecha */}
      <CustomLink text="Let's Talk"href="/" />
    </nav>
  );
}

export default NavBar;