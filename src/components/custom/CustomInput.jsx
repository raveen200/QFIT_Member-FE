import React from "react";
import propTypes from "prop-types";
import { useController } from "react-hook-form";

function CustomInput(props) {
  const { label, name, placeholder} = props;
  const { field, fieldState } = useController(props);
  return (
    <div>
      <div className="mb-2 block">
        <span
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </span>
      </div>
      <input
        {...field}
        value={field?.value || ""}
        placeholder={placeholder || name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {fieldState.error && (
        <p className="text-red-700 text-lg italic mt-1">*{fieldState.error.message}</p>
      )}
    </div>
  );
}

CustomInput.propTypes = {
  label: propTypes.string.isRequired,
  name: propTypes.string,
  placeholder: propTypes.string
};

export default CustomInput;
