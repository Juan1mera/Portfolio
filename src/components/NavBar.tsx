import StaggeredMenu from "./StaggeredMenu";
import { useLanguage } from "../context/LanguageContext";

function NavBar() {
  const { t } = useLanguage();

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