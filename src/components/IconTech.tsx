// src/components/IconTech.tsx
import React from 'react';

interface IconTechProps {
  icon: React.ReactNode;
  name: string;
}

const IconTech: React.FC<IconTechProps> = ({ icon, name }) => {
  return (
    <div className="flex justify-center items-center">
      {/* Contenedor con group */}
      <div
        className={`
          group relative inline-flex items-center justify-center
          p-3 rounded-md 
          bg-background text-text-light
          hover:translate-y-1 transition-all duration-500
          hover:bg-background
          cursor-default
        `}
      >
        {/* Ícono */}
        <span className="w-5 h-5 flex items-center justify-center text-lg">
          {icon}
        </span>

        {/* Tooltip – sube menos y tiene fondo oscuro */}
        <span
          className={`
            absolute left-1/2 -translate-x-1/2
            opacity-0 group-hover:opacity-100
            group-hover:text-background
            group-hover:text-sm
            group-hover:-translate-y-12
            duration-500 pointer-events-none
            whitespace-nowrap
          `}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

export default IconTech;