// src/components/NavBar.tsx
// import { WebColors } from "../constants/colors";
import StaggeredMenu from "./StaggeredMenu";

function NavBar() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
    { label: 'Works', ariaLabel: 'View our works', link: '#works' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  const centerItems = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Works', href: '/works' }
  ];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#C9C4B3"
      openMenuButtonColor="#C9C4B3"
      changeMenuColorOnOpen={true}
      // colors={[WebColors.PurpleLight, WebColors.PurpleLightLight ]}
      logoText="Juan Mera"
      accentColor="#30651B"
      isFixed={true}
      centerItems={centerItems}
    />
  );
}

export default NavBar;