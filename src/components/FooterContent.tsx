import { useMemo } from "react";
import { getFooterItems } from "../Helpers/FooterHelper";

const FooterContent = () => {
  const items = useMemo(() => getFooterItems(), []);

  return (
    <div className="col-md-6" style={{ padding: 10 }}>
      <h4>Намерете ни</h4>
      <ul className="contact-info list-unstyled">
        {!!items?.length &&
          items.map(({ icon, href, className, content }) => (
            <li className="d-flex align-items-center">
              {icon}
              {!href && <span style={{ paddingLeft: 10 }}>{content}</span>}
              {!!href && (
                <a
                  style={{ paddingLeft: 10 }}
                  href={href}
                  className={!!className ? className : ""}
                >
                  {content}
                </a>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterContent;
