import React from 'react';

function Button(props: any) {
    const { label,onClick } = props;

    return (
        <button onClick={onClick}>{label}</button>
    );
}
export default Button;