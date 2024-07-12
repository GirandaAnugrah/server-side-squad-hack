import React, { useEffect } from "react";
import ReactSelect from "react-select";
import { GroupBase } from "react-select";
import { Props } from "react-select";

type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group> & {
  label: string;
  labelPosition?: "row" | "col";
};

const ReactSelectWithLabel = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  className,
  id,
  label,
  value,
  labelPosition = "col",
  ...rest
}: SelectProps<Option, IsMulti, Group>) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div
      className={`${
        labelPosition === "row"
          ? "md:flex md:flex-row md:items-center md:gap-2 "
          : ""
      } ${className || ""}`}
    >
      <label htmlFor={id} className={`block mb-1 font-semibold`}>
        {label}
      </label>
      <ReactSelect
        {...rest}
        value={value || null}
        // classNamePrefix={"crs"}
        // className={`crs-container`}
        styles={{
          valueContainer: (provided) => ({
            ...provided,
            padding: "0 0.5rem",
          }),
          input: (provided) => ({
            ...provided,
            padding: "6px 0",
            border: "none",
            boxShadow: "none",
          }),
          control: (provided) => ({
            ...provided,
            border: "2px solid #E5E7EB",
            boxShadow: "none",
          }),
          container: (provided) => ({
            ...provided,
            outline: "none",
            boxShadow: "none",
          }),
        }}
        id={id}
      />
    </div>
  );
};

export default ReactSelectWithLabel;
