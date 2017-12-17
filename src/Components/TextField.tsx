import * as React from 'react';

type TextFieldProps = {
    name: string;
    value: string;
    type?: string
    onChange(e: React.FormEvent<HTMLInputElement>): void;
};

const TextField: React.SFC<TextFieldProps> = ({name, onChange, value, type}) => {
    
    return(
        <input name={name} type="text" value={value} onChange={onChange} />
    );
};

TextField.defaultProps = {
    name: 'input',
    type: 'text',
    value: 'Hello',
};

export default TextField;