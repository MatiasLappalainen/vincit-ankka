import * as React from 'react';

type TextFieldProps = {
  name: string;
  value: string | number;
  type?: string;
  variant: string;
  placeholder: string;
  onChange(e: React.FormEvent<HTMLInputElement>): void;
};

const TextField: React.SFC<TextFieldProps> = props => {
  const { name, onChange, value, type, variant, placeholder } = props;
  return (
    <input
      placeholder={placeholder}
      name={name}
      className={variant}
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

TextField.defaultProps = {
  name: 'input',
  type: 'text',
  value: 'Hello',
  variant: 'form-control'
};

export default TextField;
