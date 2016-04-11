import React from 'react'
import { reduxForm } from 'redux-form';
import ItemForm from '../components/ItemForm.jsx'

const AddItemForm = (props) => (
  <ItemForm {...props} />
);

export default reduxForm({
  form: 'addItem',
  fields: ['name', 'value'],
})(AddItemForm)
