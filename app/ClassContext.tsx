import {useState, useContext, createContext } from "react";
type Class = {
className: string;
professor: string;
room: string;
startTime: string;
endTime: string;
selectedDays: number[];
}

const ClassContext = createContext(null);

export function ClassProvider({ children }) {
	const [classes, setClasses] = useState<Class[]>([]);

	return (
		<ClassContext.Provider value= {{ classes, setClasses}}>
		{children}
		</ClassContext.Provider>
	);
}

export function useClasses(){
	const context = useContext(ClassContext);

	return context;
}
