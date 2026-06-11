import React from 'react';
import './LinkProject.css';

interface Props {
  href: string;
  text: string;
  className?: string;
}

const LinkProject: React.FC<Props> = ({ href, text, className }) => {
  return (
    <div className="link-project">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={`learn-more ${className || ''}`}
        href={href}
      >
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="a-text">{text}</span>
      </a>
    </div>
  );
}

export default LinkProject;
