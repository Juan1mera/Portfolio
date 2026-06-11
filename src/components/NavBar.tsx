import StaggeredMenu from "./StaggeredMenu";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Color del botón del menú según el tema activo
  const buttonColor = theme === 'dark' ? '#C9C4B3' : '#171717';

  const menuItems = [
    { label: t.nav.home, ariaLabel: 'Go to home page', link: '/' },
    { label: t.nav.about, ariaLabel: 'Learn about us', link: '#about' },
    { label: t.nav.studies, ariaLabel: 'Learn about academic studies', link: '#studies' },
    { label: t.nav.works, ariaLabel: 'View our works', link: '#works' },
    { label: t.nav.contact, ariaLabel: 'Get in touch', link: '#contact' }
  ];

  const socialItems = [
    { label: t.nav.buyMeCoffee, link: 'https://buymeacoffee.com/meradev' },
    { label: t.nav.support, link: '/support' },
    { label: t.nav.terms, link: '/terms' }
  ];

  const centerItems = [
    { text: t.nav.letsTalk, href: '#footer' },
  ];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor={buttonColor}
      openMenuButtonColor={buttonColor}
      changeMenuColorOnOpen={true}
      logoText="Juan Mera"
      accentColor="#6950b2"
      isFixed={true}
      centerItems={centerItems}
    />
  );
}

export default NavBar;
