import { FormValues } from "../services/MyForm";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
const EmailJsKeys = {
  SERVICE_KEY: process.env.REACT_APP_EMAILJS_SERVICE_KEY as string,
  TEMPLATE_KEY: process.env.REACT_APP_EMAILJS_TEMPLATE_KEY as string,
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string,
};

export const purchaseSendEmail = (
  values: FormValues
): Promise<EmailJSResponseStatus> =>
  emailjs.send(
    EmailJsKeys.SERVICE_KEY,
    EmailJsKeys.TEMPLATE_KEY,
    values,
    EmailJsKeys.PUBLIC_KEY,
  );
