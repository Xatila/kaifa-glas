import React, { useState } from "react";
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
import { CartItemsProps } from "../components/Cart/CartItems";
import ThankYouPage from "../components/ThankYouPage";
import SorryPage from "../components/SorryPage";

firebase.initializeApp(requestConfigToFb);

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  address: string;
  cartItems: CartItemsProps[];
}
interface Props {
  cartItems: CartItemsProps[];
}

const MyForm = ({ cartItems }: Props) => {
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

      await firebase.firestore().collection("usersOrdersInfo").add(formValues);

      setFormValues({
        firstName: "",
        lastName: "",
        city: "",
        phone: "",
        address: "",
        cartItems: [],
      });
      console.log("Form submitted successfully!");
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
      <FormControl isRequired>
        <FormLabel htmlFor="name">Име</FormLabel>
        <Input
          type="name"
          id="firstName"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChangeNames}
          minLength={3}
          maxLength={20}
          placeholder="Иван"
          className="light-placeholder"
        />
      </FormControl>
      <FormControl isRequired marginTop="10px">
        <FormLabel htmlFor="name">Фамилия</FormLabel>
        <Input
          type="name"
          id="lastName"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChangeNames}
          minLength={3}
          maxLength={20}
          placeholder="Иванов"
          className="light-placeholder"
        />
      </FormControl>
      <FormControl isRequired marginTop="10px">
        <FormLabel htmlFor="number">Телефон</FormLabel>
        <Input
          type="text"
          id="phone"
          name="phone"
          minLength={10}
          maxLength={10}
          value={formValues.phone}
          onChange={handleChangePhone}
          placeholder="0898989898"
          className="light-placeholder"
        />
      </FormControl>
      <FormControl isRequired marginTop="10px">
        <FormLabel htmlFor="city">Град/Село</FormLabel>
        <Input
          type="text"
          id="city"
          name="city"
          value={formValues.city}
          onChange={handleChangeNames}
          minLength={3}
          maxLength={18}
          placeholder="София"
          className="light-placeholder"
        />
      </FormControl>

      <FormControl isRequired marginTop="10px">
        <FormLabel htmlFor="city">Адрес</FormLabel>
        <Input
          type="text"
          id="address"
          name="address"
          value={formValues.address}
          onChange={handleChangeAddress}
          minLength={8}
          maxLength={90}
          placeholder="ул. Васил Левски 56, жк. Младост 1"
          className="light-placeholder"
        />
      </FormControl>
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
