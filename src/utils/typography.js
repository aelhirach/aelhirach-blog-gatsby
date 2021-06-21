import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    body: {
      color: 'rgba(255, 255, 255, 0.9)'
    },
    hr: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    blockquote: {
      color: 'rgba(255, 255, 255, 0.7)'
    }
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;