import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const FooterContent = () => {
  return (
    <div className="col-md-6" style={{ padding: 10 }}>
      <h4>Намерете ни</h4>
      <ul className="contact-info list-unstyled">
        <li className="d-flex align-items-center">
          <FaMapMarkerAlt className="footer-icon" />
          <span style={{ paddingLeft: 10 }}>
            ул. "Атанас Манчев" 18, 1700 Студентски Комплекс, София, България
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
  );
};

export default FooterContent;
