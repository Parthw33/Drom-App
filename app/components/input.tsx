'use cilent'

import clsx from 'clsx';
import { type } from 'os';
import {
    FieldError,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';

interface InputProps{
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldError,
    disabled?: boolean;
}

const Input : React.FC<InputProps>  = ({
    label,
    id,
    type,
    required,
    errors,
    disabled
}) =>{
    return(
        <div>
            <label htmlFor={id}
            className='
                block
                text-sm
                font-medium
                leading-6
                text-gray-900
            '
            >
                {label}
            </label>
            <div
            className='mt-2'>
                <input 
                    type={type} 
                />

            </div>
        </div>
    );
}

export default Input;