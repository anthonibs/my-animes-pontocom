import { createContext, useState, useContext, ReactNode } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface IThemeContext {
	toggleTheme(): void;
	theme: ITheme;
}

interface ITheme {
	title: string;

	colors: {
		primary: string;
		secondary: string;
		tertiary: string;

		white: string;
		black: string;
		gray: string;

		success: string;
		info: string;
		warning: string;
	},
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);


interface IThemeProviderProps {
	children: ReactNode;
}

const ThemeProvider: React.FC<IThemeProviderProps> = (children) => {

	const [theme, setTheme] = useState<ITheme>(() => {
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