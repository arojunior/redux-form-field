import React from 'react'
/*
* Field wrapper
*/
const RenderField = ({
  input,
  label,
  placeholder,
  inputClass,
  labelClass,
  divClass,
  type,
  meta: {touched, error}
}) => (
  <div className={divClass}>
    {label &&
      <div className={labelClass}>
        <label>{label}</label>
      </div>}
    <div className={inputClass}>
      {type === 'textarea'
        ? <textarea
            {...input}
            placeholder={placeholder}
            type={type}
            className="form-control"
          />
        : <input
            {...input}
            placeholder={placeholder}
            type={type}
            className="form-control"
          />}

    </div>
    {touched && (error && <span className="text-danger">{error}</span>)}
  </div>
)

export default RenderField

/*
* Vadation
*/
export const required = value => (value ? undefined : 'Required')

export const maxLength = max => value =>
  (value && value.length > max
    ? `Must be ${max} characters or less`
    : undefined)

export const number = value =>
  (value && isNaN(Number(value)) ? 'Must be a number' : undefined)

export const minValue = min => value =>
  (value && value < min ? `Must be at least ${min}` : undefined)

export const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined)
