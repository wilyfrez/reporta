import { useStateContext } from '../contexts/ContextProvider';

const Input = ({
  icon,
  type = 'text',
  label,
  name,
  placeholder,
  required = false,
}) => {
  const { handleFormInputChange, formData } = useStateContext();

  return (
    <label class="block mb-4">
      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm mb-1 font-medium text-slate-700">
        {label}
      </span>
      <div className="flex flex-row justify-start items-center border border-slate-300 rounded-lg  ">
        {icon && (
          <span class="left-0 flex items-center pl-2 text-slate-400 ">
            {icon}
          </span>
        )}
        <input
          className="placeholder:italic placeholder:text-slate-400 text-slate-400 inline-block bg-white w-full py-3  px-3 shadow-sm focus:outline-none  sm:text-sm"
          placeholder={placeholder || label}
          type={type}
          id={name}
        />
      </div>
    </label>

    // <div>
    //   <label htmlFor={name} className="text-[14px] font-medium block mb-2">
    //     {label}
    //     {required && <span className=" text-red-500">*</span>}
    //   </label>

    //   <input
    //     type={type}
    //     value={formData[name] || ''}
    //     onChange={(e) => handleFormInputChange(e, name)}
    //     id={name}
    //     className="w-full border border-1 border-gray-400 rounded-[10px] px-5 h-[46px] mb-4 text-black placeholder:font-light"
    //     placeholder={placeholder || label}
    //   />
    // </div>
  );
};

export default Input;
