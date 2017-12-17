import * as React from 'react';

type TextFieldProps = {
    name: string;
    value: string;
    type?: string;
    variant: string
    onChange(e: React.FormEvent<HTMLInputElement>): void;
};

const TextField: React.SFC<TextFieldProps> = ({name, onChange, value, type, variant}) => {
    
    return(
        <input name={name} className={variant} type="text" value={value} onChange={onChange} />
    );
};

TextField.defaultProps = {
    name: 'input',
    type: 'text',
    value: 'Hello',
    variant: 'form-control'
};

export default TextField;