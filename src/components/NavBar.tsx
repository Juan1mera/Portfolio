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
    { label: 'Buy me a Coffee', link: 'https://buymeacoffee.com/meradev' },
    { label: 'Support', link: '/support' },
    { label: 'Terms', link: '/terms' }
  ];

  const centerItems = [
    { text: "Let's Talks", href: '#footer' },
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
      accentColor="#6950b2"
      isFixed={true}
      centerItems={centerItems}
    />
  );
}

export default NavBar;