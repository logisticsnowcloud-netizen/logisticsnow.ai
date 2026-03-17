import { createContext, useContext, useState, ReactNode } from "react";

interface ScheduleDemoContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ScheduleDemoContext = createContext<ScheduleDemoContextType>({
  open: false,
  setOpen: () => {},
});

export const useScheduleDemo = () => useContext(ScheduleDemoContext);

export const ScheduleDemoProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <ScheduleDemoContext.Provider value={{ open, setOpen }}>
      {children}
    </ScheduleDemoContext.Provider>
  );
};
