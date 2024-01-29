import Select, { GroupBase, StylesConfig } from 'react-select';
import makeAnimated from 'react-select/animated';
import { Control, Controller, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '@/types/IFormValues.interface';
import { musicGendres } from '@/constants/musicGendres';

const animatedComponents = makeAnimated();

interface MultiSelectProps {
  label: string;
  placeholder: string;
  fieldName: keyof IFormValues;
  register: UseFormRegister<IFormValues>;
  isOptional?: boolean;
  showLabel?: boolean;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  control: Control<IFormValues>;
}

type OptionType = { value: string; label: string };

const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  placeholder,
  fieldName,
  isOptional = false,
  showLabel = true,
  className = '',
  inputClassName = '',
  labelClassName = 'text-[16px] mb-3 font-avenirHeavy text-[#36424a] leading-[1.13]',
  control,
}) => {
  const customStyles: StylesConfig<unknown, boolean, GroupBase<OptionType>> = {
    control: (provided, state) => ({
      ...provided,
      background: '#fff',
      borderColor: state.isFocused ? '#313131' : '#e5e5e5',
      borderRadius: '8px',
      minHeight: '56px',
      height: '56px',
      boxShadow: state.isFocused ? '0 0 0 1px #313131' : 'none',
      '&:hover': {
        borderColor: state.isFocused ? '#313131' : '#313131',
      },
    }),

    valueContainer: (provided) => ({
      ...provided,
      height: '56px',
      padding: '0 16px',
    }),

    input: (provided) => ({
      ...provided,
      margin: '0px',
      padding: '0px',
      color: '#000',
      fontSize: '16px',
      lineHeight: '24px',
      fontFamily: 'Avenir Book', // Aquí está la corrección
    }),

    placeholder: (provided) => ({
      ...provided,
      color: '#6e7a83',
      margin: '0px',
      transform: 'translateY(-50%)',
      position: 'absolute',
      top: '50%',
      fontSize: '16px',
      lineHeight: '24px',
      fontFamily: 'Avenir Book', // Aquí está la corrección
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '0px',
    }),

    clearIndicator: (provided) => ({
      ...provided,
      padding: '0px',
    }),

    multiValue: (provided) => ({
      ...provided,
      background: '#E4E4E4',
      color: '#000',
    }),

    multiValueLabel: (provided) => ({
      ...provided,
      color: '#000',
      fontFamily: 'Avenir Book',
    }),

    multiValueRemove: (provided) => ({
      ...provided,
      color: '#A6A6A6',
      '&:hover': {
        backgroundColor: '#C0C0C0',
        color: '#000',
      },
    }),

    option: (provided) => ({
      ...provided,
      fontFamily: 'Avenir Book',
    }),
  };

  const transformToSelectFormat = (data: { name: string }[]) => {
    return data.map((item) => ({ value: item.name, label: item.name }));
  };

  const transformToApiFormat = (data: { value: string; label: string }[]) => {
    return data.map((item) => ({ name: item.value }));
  };

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {showLabel && (
        <h2 className={labelClassName}>
          {label}
          {isOptional && (
            <span className='text-[#b6babd] text-[12px] leading-[24px] font-avenirHeavy'>
              {' '}
              (Optional)
            </span>
          )}
        </h2>
      )}
      <Controller
        control={control}
        name={fieldName}
        render={({ field: { onChange, onBlur, value, ref } }) => {
          const selectValue = Array.isArray(value)
            ? transformToSelectFormat(value)
            : [];

          return (
            <Select
              className={`w-full ${inputClassName}`}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={musicGendres as unknown as OptionType[]}
              placeholder={placeholder}
              onChange={(val) => {
                // Asegúrate de que 'val' siempre sea un array de objetos con las propiedades 'value' y 'label'
                const apiValues = Array.isArray(val)
                  ? transformToApiFormat(val)
                  : [];
                onChange(apiValues); // Pasa los valores transformados a tu manejador onChange
              }}
              onBlur={onBlur}
              value={selectValue}
              ref={ref}
              styles={customStyles}
            />
          );
        }}
      />
    </div>
  );
};

export default MultiSelect;
