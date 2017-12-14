import * as React from 'react';

type TextFieldProps = {
    name: string;
    onChange:() => void;
    value: string;
    type?: string
}

const TextField: React.SFC<TextFieldProps> = ({name, onChange, value, type}) => {
    
    return(
        <input name={name} type="text" value={value} onChange={onChange} />
    )
}

TextField.defaultProps = {
    name: 'input',
    type: 'text',
    value: 'Hello',
}

export default TextField;