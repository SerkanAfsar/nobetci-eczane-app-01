"use client";

import React from "react";
import Select from "react-select";
const CustomSelect = React.forwardRef<
  React.ElementRef<typeof Select>,
  React.ComponentPropsWithoutRef<typeof Select>
>(({ options, ...rest }, ref) => {
  return <Select options={options} ref={ref} {...rest} />;
});

CustomSelect.displayName = "CustomSelect";
export default CustomSelect;
