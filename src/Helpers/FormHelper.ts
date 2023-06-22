import { FormValues } from "../services/MyForm";

export type FormInputType = {
  marginTop: boolean;
  htmlFor: string;
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  minLength: number;
  maxLength: number;
  placeholder: string;
};

export const getFormInputs = (
  formValues: FormValues,
  handleChangeNames: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangeAddress: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangePhone: (event: React.ChangeEvent<HTMLInputElement>) => void
): FormInputType[] => [
  {
    marginTop: true,
    htmlFor: "name",
    label: "Име",
    type: "name",
    id: "firstName",
    name: "firstName",
    value: formValues.firstName,
    onChange: handleChangeNames,
    minLength: 3,
    maxLength: 20,
    placeholder: "Иван",
  },
  {
    marginTop: true,
    htmlFor: "name",
    label: "Фамилия",
    type: "name",
    id: "lastName",
    name: "lastName",
    value: formValues.lastName,
    onChange: handleChangeNames,
    minLength: 3,
    maxLength: 20,
    placeholder: "Иванов",
  },
  {
    marginTop: true,
    htmlFor: "number",
    label: "Телефон",
    type: "text",
    id: "phone",
    name: "phone",
    value: formValues.phone,
    onChange: handleChangePhone,
    minLength: 10,
    maxLength: 10,
    placeholder: "0898989898",
  },
  {
    marginTop: true,
    htmlFor: "city",
    label: "Град/Село",
    type: "text",
    id: "city",
    name: "city",
    value: formValues.city,
    onChange: handleChangeNames,
    minLength: 3,
    maxLength: 18,
    placeholder: "София",
  },
  {
    marginTop: true,
    htmlFor: "address",
    label: "Адрес",
    type: "text",
    id: "address",
    name: "address",
    value: formValues.address,
    onChange: handleChangeAddress,
    minLength: 8,
    maxLength: 90,
    placeholder: "ул. Васил Левски 56, жк. Младост 1",
  },
];
