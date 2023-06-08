import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>За нас</h4>
            <p>
              KAIFA Glass е нова марка, която продава стъклени протектори за
              iPhone от премиум качество. Компанията предлага гаранция за
              задоволеност на клиентите, отлични цени и най-добро обслужване на
              клиенти в индустрията. Клиентите могат да бъдат сигурни, че
              закупуват най-качествените продукти на разположение и ще бъдат
              доволни от своята покупка. Нашите продукти се подбират с
              най-голямо внимание към детайлите.
            </p>
          </div>
          <div className="col-md-6" style={{ padding: 10 }}>
            <h4>Намерете ни</h4>
            <ul className="contact-info list-unstyled">
              <li className="d-flex align-items-center">
                <FaMapMarkerAlt className="footer-icon" />
                <span style={{ paddingLeft: 10 }}>
                  ул. "Атанас Манчев" 18, 1700 Студентски Комплекс, София,
                  България
                </span>
              </li>
              <li className="d-flex align-items-center">
                <FaPhone className="footer-icon" />
                <a style={{ paddingLeft: 10 }} href="tel:0897256650">
                  {" "}
                  +359 897256650
                </a>
              </li>
              <li className="d-flex align-items-center">
                <FaEnvelope className="footer-icon" />
                <a
                  style={{ paddingLeft: 10 }}
                  href="mailto:kevinbalievv@gmail.com"
                  className="text-light"
                >
                  kevinbalievv@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-dark text-center py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} KAIFA Glass. Всички права са
                запазени.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
