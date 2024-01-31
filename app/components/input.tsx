'use client';

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
    register,
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
            <div className='mt-2'>
                <input 
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, {required})}
                    className={clsx(`
                        form-input
                        
                    `)}
                />
            </div>
        </div>
    );
}

export default Input;