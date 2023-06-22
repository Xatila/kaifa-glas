import React, { useMemo, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import requestConfigToFb from "./RequestConfig";
import { CartItemsProps } from "../components/CartItems";
import ThankYouPage from "../components/ThankYouPage";
import SorryPage from "../components/SorryPage";
import { getFormInputs } from "../Helpers/FormHelper";
import { handleSubmit } from "../Helpers/SubmitHelper";
import FormView from "../components/FormView";

firebase.initializeApp(requestConfigToFb);

export type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  address: string;
  cartItems: CartItemsProps[] | string;
};
interface Props {
  cartItems: CartItemsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemsProps[]>>;
}

const MyForm = ({ cartItems, setCartItems }: Props) => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    city: "",
    phone: "",
    address: "",
    cartItems: cartItems,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent) =>
    handleSubmit(
      event,
      cartItems,
      setSubmissionError,
      setIsSubmitting,
      formValues,
      setFormValues,
      setCartItems,
      setIsSubmitted
    );

  const handleChangeNames = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const onlyLetters = value.replace(/[^a-zA-Zа-яА-Я]/g, "");
    setFormValues((prevValues) => ({ ...prevValues, [name]: onlyLetters }));
  };
  const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const onlyTenNumbers = value.replace(/\D/g, "");
    setFormValues((prevValues) => ({ ...prevValues, [name]: onlyTenNumbers }));
  };

  const inputs = useMemo(
    () =>
      getFormInputs(
        formValues,
        handleChangeNames,
        handleChangeAddress,
        handleChangePhone
      ),
    [formValues]
  );

  return (
    <>
      {isSubmitted && <ThankYouPage />}
      {submissionError && <SorryPage />}
      {!isSubmitted && (
        <FormView
          inputs={inputs}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
          submissionError={submissionError}
        />
      )}
    </>
  );
};

export default MyForm;
