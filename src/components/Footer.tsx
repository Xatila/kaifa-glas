import FooterHeader from "./FooterHeader";
import FooterContent from "./FooterContent";
import FooterRights from "./FooterRights";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <FooterHeader />
          <FooterContent />
        </div>
      </div>
      <FooterRights />
    </footer>
  );
};

export default Footer;
