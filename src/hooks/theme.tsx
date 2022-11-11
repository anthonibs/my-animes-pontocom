import { createContext, useState, useContext, ReactNode } from "react";
import { DefaultTheme } from "styled-components";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface IThemeContext {
	toggleTheme(): void;
	theme: DefaultTheme;
}
interface IThemeProviderProps {
	children: ReactNode;
}


const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC<IThemeProviderProps> = (children) => {

	const [theme, setTheme] = useState<DefaultTheme>(() => {
		const themeSaved = localStorage.getItem("@my-animes:theme");
		if (themeSaved) {
			return JSON.parse(themeSaved);
		} else {
			return light;
		}
	});

	const toggleTheme = () => {
		if (theme.title === "dark") {
			setTheme(light);
			localStorage.setItem("@my-animes:theme", JSON.stringify(light));
		} else {
			setTheme(dark);
			localStorage.setItem("@my-animes:theme", JSON.stringify(dark));
		}
	};

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			{children.children}
		</ThemeContext.Provider>
	);
};


function useTheme(): IThemeContext {
	const context = useContext(ThemeContext);

	return context;
}


export { ThemeProvider, useTheme };