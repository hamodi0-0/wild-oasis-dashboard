import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useUpdateSettings } from "./useUpdateSettings";

function UpdateSettingsForm({ settings }) {
  const { id, ...defaultSettings } = settings;
  const { handleSubmit, register } = useForm({
    values: defaultSettings,
  });

  const { isUpdating, updateSettings } = useUpdateSettings();
  if (isUpdating) return <Spinner />;
  function onSubmit({
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  }) {
    updateSettings({
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          {...register("minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          {...register("maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          {...register("maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          {...register("breakfastPrice")}
        />
      </FormRow>
      <FormRow>
        <Button variation="primary" size="small">
          Update settings
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
