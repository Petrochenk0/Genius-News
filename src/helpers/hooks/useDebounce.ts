import React from 'react';

type DebounceTypes = {
  value: string;
  delay: number;
};

export const useDebounce = ({ value, delay }: DebounceTypes) => {
  const [debounceValueForInput, setDebounceValueForInput] = React.useState<string | undefined>();

  React.useEffect(() => {
    const valueTransmissionDelay = setTimeout(() => {
      setDebounceValueForInput(value);
    }, delay);

    return () => {
      clearTimeout(valueTransmissionDelay);
    };
  }, [value, delay]);

  return debounceValueForInput;
};
