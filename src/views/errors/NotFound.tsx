import { useNavigate } from "react-router-dom";
import { CustomTitleSection } from "../../components/CustomTitleSection";
import CustomLink from "../../components/ui/CustomLink";

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div
      id="notfound"
      className="flex flex-col justify-center items-center  min-h-screen w-full px-4 sm:px-6 md:px-12"
    >
      {/* Título animado */}
      <div className="flex flex-col items-center">
        <CustomTitleSection
          topTexts={["ERROR"]}
          bottomTexts={["404"]}
          purpleWord="404"
        />
      </div>

      {/* Mensaje descriptivo */}
      <div className="w-full flex items-center justify-center px-4">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl text-center">
          Oops! The page you're looking for doesn't exist.
          <br />
          <span className="text-purple-light font-semibold">
            It might have been moved or deleted.
          </span>
        </p>
      </div>

      {/* Código ASCII art del error (opcional, decorativo) */}
      <div className="hidden md:block">
        <pre className="text-purple-extra-light text-xs sm:text-sm font-mono opacity-50">
{`
 ███╗   ███╗███████╗██████╗  █████╗ 
 ████╗ ████║██╔════╝██╔══██╗██╔══██╗
 ██╔████╔██║█████╗  ██████╔╝███████║
 ██║╚██╔╝██║██╔══╝  ██╔══██╗██╔══██║
 ██║ ╚═╝ ██║███████╗██║  ██║██║  ██║
 ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
`}
        </pre>
      </div>


      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
        <CustomLink text="Go Home" href="/" />
        
        <button
          onClick={handleGoBack}
          className="px-6 py-3 text-base sm:text-lg font-semibold border-2 border-purple-light text-purple-light rounded-full hover:bg-purple-light hover:text-background-black transition-all duration-300"
        >
          Go Back
        </button>
      </div>

      {/* Sugerencias de navegación */}
      <div className="flex flex-col items-center gap-4 mt-8 sm:mt-12">
        <p className="text-sm sm:text-base font-light">Or try one of these pages:</p>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
          <a 
            href="/#about" 
            className="hover:text-purple-light transition-colors duration-200"
          >
            About
          </a>
          <span className="text-gray-600">•</span>
          <a 
            href="/#works" 
            className="hover:text-purple-light transition-colors duration-200"
          >
            Works
          </a>
          <span className="text-gray-600">•</span>
          <a 
            href="/#contact" 
            className="hover:text-purple-light transition-colors duration-200"
          >
            Contact
          </a>
          <span className="text-gray-600">•</span>
          <a 
            href="/support" 
            className="hover:text-purple-light transition-colors duration-200"
          >
            Support
          </a>
        </nav>
      </div>
    </div>
  );
}

export default NotFound;