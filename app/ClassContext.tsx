import { createContext, useContext, useState } from "react";

type Class = {
    className: string;
    professor: string;
    room: string;
    startTime: string;
    endTime: string;
    selectedDays: number[];
};

type ClassContextType = {
    classes: Class[];
    setClasses: React.Dispatch<React.SetStateAction<Class[]>>;
};

const ClassContext = createContext<ClassContextType | null>(null);

export function ClassProvider({ children }: { children: React.ReactNode }) {
    const [classes, setClasses] = useState<Class[]>([]);

    return (
        <ClassContext.Provider value={{ classes, setClasses }}>
            {children}
        </ClassContext.Provider>
    );
}

export function useClasses() {
    const context = useContext(ClassContext);

    if (!context) {
        throw new Error("useClasses must be used inside ClassProvider");
    }

    return context;
}
