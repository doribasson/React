import React, { createContext, useState, useContext, useEffect } from "react";

const SampleCtx = createContext({});

export const SampleProvider = props => {
  const [value, setValue] = useState("Default Value");
  const sampleContext = { value, setValue };

  useEffect(() => console.log("Context Value: ", value));

  return (
    <SampleCtx.Provider value={sampleContext}>
      {props.children}
    </SampleCtx.Provider>
  );
};

const useSample = WrappedComponent => props => {
  const sampleCtx = useContext(SampleCtx);
  return (
    <WrappedComponent
      {...props}
      value={sampleCtx.value}
      setValue={sampleCtx.setValue}
    />
  );
};

export { useSample };
