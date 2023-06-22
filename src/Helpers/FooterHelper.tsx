import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export const getFooterItems = () => [
  {
    icon: <FaMapMarkerAlt className="footer-icon" />,
    content:
      'ул. "Атанас Манчев" 18, 1700 Студентски Комплекс, София, България',
  },
  {
    icon: <FaPhone className="footer-icon" />,
    href: "tel:0897256650",
    content: "+359 897256650",
  },
  {
    icon: <FaEnvelope className="footer-icon" />,
    href: "mailto:kevinbalievv@gmail.com",
    className: "text-light",
    content: "kevinbalievv@gmail.com",
  },
];
