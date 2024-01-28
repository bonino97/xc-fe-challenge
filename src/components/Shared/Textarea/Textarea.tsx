import { UseFormRegister } from 'react-hook-form';
import { IFormValues } from '@/types/IFormValues.interface';

interface TextareaProps {
  label: string;
  placeholder: string;
  fieldName: keyof IFormValues;
  register: UseFormRegister<IFormValues>;
  isOptional: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  fieldName,
  register,
  isOptional = false,
}) => {
  return (
    <>
      <h2 className='text-[16px] mb-3 font-avenirHeavy text-[#36424a] leading-[1.13]'>
        {label}
        {isOptional && (
          <span className='text-[#b6babd] text-[12px] leading-[24px] font-avenirHeavy'>
            {' '}
            (Optional)
          </span>
        )}
      </h2>
      <textarea
        className='w-full h-32 p-4 border rounded-lg placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-[#313131] focus:border-transparent font-avenirBook'
        placeholder={placeholder}
        {...register(fieldName)}
      ></textarea>
    </>
  );
};

export default Textarea;
