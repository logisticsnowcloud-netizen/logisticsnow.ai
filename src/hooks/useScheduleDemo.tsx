import { createContext, useCallback, useContext, useState, ReactNode } from "react";

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
  const [open, setOpenState] = useState(false);

  const setOpen = useCallback((nextOpen: boolean) => {
    if (!nextOpen || typeof window === "undefined") {
      setOpenState(nextOpen);
      return;
    }

    window.requestAnimationFrame(() => {
      setOpenState(true);
    });
  }, []);

  return (
    <ScheduleDemoContext.Provider value={{ open, setOpen }}>
      {children}
    </ScheduleDemoContext.Provider>
  );
};
