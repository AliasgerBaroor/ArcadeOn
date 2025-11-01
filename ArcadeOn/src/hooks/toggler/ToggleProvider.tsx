import React, { createContext, useCallback, useState } from 'react';

type ToggleContextType = {
  toggles: Record<string, boolean>;
  set: (name: string, value: boolean) => void;
  setOn: (name: string) => void;
  setOff: (name: string) => void;
  toggle: (name: string) => void;
};

export const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggles, setToggles] = useState({});

  const set = useCallback((name, value) => {
    setToggles((prev) => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const setOn = useCallback((name) => set(name, true), [set]);
  const setOff = useCallback((name) => set(name, false), [set]);
  const toggle = useCallback(
    (name) => setToggles((prev) => ({ ...prev, [name]: !prev[name] })),
    []
  );

  const contextValue = {
    toggles,
    set,
    setOn,
    setOff,
    toggle,
  };

  return (
    <ToggleContext.Provider value={contextValue}>
      {children}
    </ToggleContext.Provider>
  );
};
