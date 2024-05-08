import React from 'react';
import propTypes from 'prop-types';
import { useController } from 'react-hook-form';

function CustomSelect(props) {
  let { label, options, placeholder } = props;
  const { field, fieldState } = useController(props);

  return (
    <div className="block">
      <label
        htmlFor="default"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...field}
        onChange={(e) => {
          field.onChange(e.target.value);
          if (props.onChange) props.onChange(e.target.value);
        }}
        value={field?.value || ''}>
        <option value="">{placeholder ? placeholder : 'Pick one'}</option>
        {options.map((option) => (
          <option key={option.id} disabled={option?.disabled} value={option.id}>
            {option.text} {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}

CustomSelect.propTypes = {
  label: propTypes.string.isRequired,
  options: propTypes.array.isRequired,
  placeholder: propTypes.string,
  onChange: propTypes.func
};

export default CustomSelect;
