import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import requestConfigToFb from "./RequestConfig";
import { CartItemsProps } from "../components/CartItems";
import ThankYouPage from "../components/ThankYouPage";
import SorryPage from "../components/SorryPage";
import { purchaseSendEmail } from "../Helpers/Email";
import { getFormInputs } from "../Helpers/FormHelper";

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (cartItems.length < 1) {
      console.error("Error submitting form: Cart is empty.");
      setSubmissionError("Cart is empty. Please add items before submitting.");
      return;
    }
    try {
      setIsSubmitting(true);
      setSubmissionError(null);

      purchaseSendEmail({
        ...formValues,
        cartItems: cartItems
          .map((cartItem) => `${cartItem.heading} - ${cartItem.count} бр.`)
          .join(", "),
      });

      await firebase.firestore().collection("usersOrdersInfo").add(formValues);

      setFormValues({
        firstName: "",
        lastName: "",
        city: "",
        phone: "",
        address: "",
        cartItems: [],
      });
      setCartItems([]);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionError("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

  if (isSubmitted) {
    return <ThankYouPage />;
  }
  if (submissionError) {
    return <SorryPage />;
  }
  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      width="300px"
      margin="auto"
      padding="20px"
      border="1px solid gray"
      borderRadius="md"
    >
      {!!inputs?.length &&
        inputs.map(
          ({
            marginTop,
            htmlFor,
            label,
            type,
            id,
            name,
            value,
            onChange,
            minLength,
            maxLength,
            placeholder,
          }) => (
            <FormControl
              key={id}
              isRequired
              marginTop={marginTop ? "10px" : ""}
            >
              <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
              <Input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                minLength={minLength}
                maxLength={maxLength}
                placeholder={placeholder}
                className="light-placeholder"
              />
            </FormControl>
          )
        )}

      <Button
        type="submit"
        isLoading={isSubmitting}
        loadingText="Submitting"
        marginTop="20px"
        width="full"
        colorScheme="teal"
      >
        Поръчай
      </Button>
      {submissionError && (
        <FormErrorMessage marginTop="10px">{submissionError}</FormErrorMessage>
      )}
    </Box>
  );
};

export default MyForm;
