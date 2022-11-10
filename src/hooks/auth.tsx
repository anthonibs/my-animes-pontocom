import { createContext, useState, useContext, ReactNode } from "react";

interface IAuthContext {
	logged: boolean;
	signIn(email: string, password: string): void;
	signOut(): void;
}


const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthProviderProps {
	children: ReactNode;
}

const AuthProvider: React.FC<IAuthProviderProps> = (children) => {

	const [logged, setLogged] = useState<boolean>(() => {
		const isLogged = localStorage.getItem("@my-animes:logged");
		return !isLogged;
	});

	const signIn = (email: string, password: string) => {
		if (email === "naruto@email.com" && password === "1234") {
			localStorage.setItem("@my-animes:logged", "true");
			setLogged(true);
		}
	};

	const signOut = () => {
		localStorage.removeItem("@my-animes:logged");
		window.location.href = "http://localhost:3000/";
		setLogged(false);
	};

	return (
		<AuthContext.Provider value={{ logged, signIn, signOut }}>
			{children.children}
		</AuthContext.Provider>
	);
};

function useAuth(): IAuthContext {
	const context = useContext(AuthContext);
	return context;
}

export { AuthProvider, useAuth };