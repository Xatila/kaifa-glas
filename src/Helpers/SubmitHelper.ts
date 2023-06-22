import firebase from "firebase/compat/app";
import { CartItemsProps } from "../components/CartItems";
import { purchaseSendEmail } from "./Email";
import { FormValues } from "../services/MyForm";

export const handleSubmit = async (
  event: React.FormEvent,
  cartItems: CartItemsProps[],
  setSubmissionError: (value: React.SetStateAction<string | null>) => void,
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  formValues: FormValues,
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>,
  setCartItems: React.Dispatch<React.SetStateAction<CartItemsProps[]>>,
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
) => {
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
