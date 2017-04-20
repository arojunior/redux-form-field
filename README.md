# Redux-form Field Renderer

### Install
```shell
npm install redux-form-field-wrapper
```

### Use
```javascript
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import renderField from 'redux-form-field-wrapper'

const defaultConfig = {
  divClass: 'form-group',
  inputClass: 'col-md-10',
  labelClass: 'col-md-2',
  component: renderField
}

const Form = props => {
  const {handleSubmit, pristine, invalid, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <Field
        name="name"
        type="text"
        placeholder="Name"
        label="Name"
        {...defaultConfig}
      />
      <Field
        name="email"
        type="email"
        placeholder="Username / E-mail"
        label="E-mail"
        {...defaultConfig}
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={pristine || submitting || invalid}>
        Send
      </button>      
    </form>      
    )
}

export default reduxForm({
  form: 'myForm'
})(Form)
```

### Output

```html
<form class="form-horizontal">
<div class="form-group">
  <div class="col-md-2">
    <label>Name</label>
  </div>
  <div class="col-md-10">
    <input type="text" name="name" placeholder="Name" class="form-control">
  </div>
</div>
<div class="form-group">
  <div class="col-md-2">
    <label>E-mail</label>
  </div>
  <div class="col-md-10">
    <input type="email" name="email" placeholder="E-mail" class="form-control">
  </div>
</div>
</form>
```

### What about validation?

Just add your own validation method and populate errors in case of fail

```javascript
const validate = values => {
  const errors = {}
  if ( ! checkUsername(values.email)) {
    errors.email = 'Sorry, Dude. This username is already in use'
  }
  return errors
}

export default reduxForm({
  form: 'myForm',
  validate
})(Form)
```

### Need something easier?

```javascript
import renderField, {email} from 'redux-form-field-wrapper'

// ...Code
<Field
  name="email"
  type="email"
  placeholder="E-mail"
  label="E-mail"
  validate={email}
  {...defaultConfig}
/>
// ...Code

export default reduxForm({
  form: 'myForm'
})(Form)
// Obs: Don't need validate property
```

***Validation methods available:***

* required
* maxLength
* number
* minValue
* email
