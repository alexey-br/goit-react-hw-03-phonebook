import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  InputItem,
  Input,
  InputLabel,
  SubmitBtn,
  ValidationError,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputItem>
          <InputLabel>Name:</InputLabel>
          <Input type="text" name="name" />
          <ValidationError component="span" name="name" />
        </InputItem>
        <InputItem>
          <InputLabel>Number:</InputLabel>
          <Input type="tel" name="number" />
          <ValidationError component="span" name="number" />
        </InputItem>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
