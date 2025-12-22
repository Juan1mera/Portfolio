import React from "react";
import IconTech from "./IconTech";
import type { ProjectData } from "./FlowingMenu";
import LinkProject from "../views/home/sections/work/LinkProject";

interface ProjectMenuPanelProps {
  data: ProjectData;
}

export const ProjectMenuPanel: React.FC<ProjectMenuPanelProps> = ({ data }) => {
  const images = [data.image1, data.image2, data.image3].filter(Boolean) as string[];
  const [expandedImage, setExpandedImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedImage(null);
    };
    if (expandedImage) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [expandedImage]);

  return (
    <>
      <div className="bg-text-light text-background p-6 md:p-10">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h3>
          <p className="text-lg mb-6 text-background-black">{data.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <span className="font-semibold text-sm uppercase text-purple-light">Rol</span>
              <p className="mt-1">{data.role}</p>
            </div>
            <div>
              <span className="font-semibold text-sm uppercase text-purple-light">Year</span>
              <p className="mt-1">{data.year}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mt-2">
                {data.technologies.map((tech, i) => (
                  <IconTech key={i} icon={tech.icon} name={tech.name} />
                ))}
              </div>
            </div>
          </div>

          {images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-video bg-contain bg-no-repeat rounded-lg overflow-hidden cursor-zoom-in transition-all duration-300 hover:scale-[1.02]"
                  style={{ backgroundImage: `url(${img})` }}
                  onClick={() => setExpandedImage(img)}
                />
              ))}
            </div>
          )}

          {data.links && data.links.length > 0 && (
            <div className="flex gap-4 flex-wrap">
              {data.links.map((link, i) => (
                <LinkProject key={i} text={link.name} href={link.url} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* LIGHTBOX */}
      {expandedImage && (
        <>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes zoomIn {
              from {
                opacity: 0;
                transform: scale(0.5);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            .animate-fadeIn {
              animation: fadeIn 0.2s ease-out;
            }
            .animate-zoomIn {
              animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            }
          `}</style>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fadeIn"
            onClick={() => setExpandedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full p-8">
              <img
                src={expandedImage}
                alt={`${data.title} - imagen ${images.indexOf(expandedImage) + 1}`}
                className="max-w-full max-h-full mx-auto object-contain rounded-lg animate-zoomIn"
              />
              <button
                onClick={() => setExpandedImage(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 transition text-5xl font-light bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                ×
              </button>
              <p className="absolute bottom-4 left-4 text-white/70 text-sm">
                Clic o ESC para cerrar
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};