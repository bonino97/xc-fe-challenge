import { IFormValues } from '@/types/IFormValues.interface';
import { UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  placeholder: string;
  fieldName: keyof IFormValues;
  register: UseFormRegister<IFormValues>;
  isOptional?: boolean;
  showLabel?: boolean;
  inputClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  fieldName,
  register,
  isOptional = false,
  showLabel = true,
  inputClassName = '',
}) => {
  return (
    <>
      {showLabel && (
        <h2 className='text-[16px] mb-3 font-avenirHeavy text-[#36424a] leading-[1.13]'>
          {label}
          {isOptional && (
            <span className='text-[#b6babd] text-[12px] leading-[24px] font-avenirHeavy'>
              {' '}
              (Optional)
            </span>
          )}
        </h2>
      )}
      <input
        type='text'
        className={`w-full p-3 border rounded-lg ${inputClassName} placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-[#313131] focus:border-transparent font-avenirBook`}
        placeholder={placeholder}
        {...register(fieldName)}
      />
    </>
  );
};

export default Input;
