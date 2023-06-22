import { Input, FormErrorMessage, Box } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel, Button } from "@chakra-ui/react";
import { FormInputType } from "../Helpers/FormHelper";

type Props = {
  inputs: FormInputType[];
  onSubmit: (event: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
  submissionError: string | null;
};

const FormView: React.FC<Props> = ({
  inputs,
  onSubmit,
  isSubmitting,
  submissionError,
}) => {
  return (
    <Box
      as="form"
      onSubmit={onSubmit}
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

export default FormView;
