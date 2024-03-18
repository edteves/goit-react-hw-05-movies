import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <p className={css.footerText}>&copy; {new Date().getFullYear()}</p>
      <p className={css.developer}>Created By Edwin T. Teves Jr.</p>
    </footer>
  );
};
