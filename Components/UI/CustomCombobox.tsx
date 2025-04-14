"use client";
import { cn } from "@/utils";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export type CustomComboboxType = {
  className?: string;
  options: CustomOptionType[];
  onChange?: (val: CustomOptionType) => void;
};

export type CustomOptionType = {
  id: number | string;
  value: string;
};

export default function CustomCombobox({
  options,
  className,
  onChange: customOnOnChange,
}: CustomComboboxType) {
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<CustomOptionType>(options[0]);

  useEffect(() => {
    setQuery("");
    setSelected(options[0]);
  }, [options]);

  useEffect(() => {
    if (customOnOnChange) {
      customOnOnChange(selected);
    }
  }, [selected, customOnOnChange]);

  const filteredValues =
    query === ""
      ? options
      : options.filter((option) => {
          return option.value.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      value={selected}
      onChange={(value: any) => setSelected(value)}
      onClose={() => setQuery("")}
    >
      <div className={cn("relative", className)}>
        <ComboboxInput
          className={cn(
            "bg-secondary w-full rounded-lg border-none py-3 pr-8 pl-3 text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
            className,
          )}
          displayValue={(person: any) => person?.value}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
          <ChevronDownIcon className="size-8 fill-white/60 group-data-[hover]:fill-white" />
        </ComboboxButton>
      </div>

      <ComboboxOptions
        anchor="bottom"
        transition
        className={cn(
          "bg-secondary w-[var(--input-width)] rounded-xl border-2 border-white p-1 shadow [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
        )}
      >
        {filteredValues.map((item) => (
          <ComboboxOption
            key={item.id}
            value={item}
            className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-[focus]:bg-white/10"
          >
            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
            <div className="text-sm/6 text-white">{item.value}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}
