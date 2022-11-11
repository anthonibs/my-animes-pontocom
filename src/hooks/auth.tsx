import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface IAuthContext {
	logged: boolean;
	signIn(email: string, password: string): void;
	signOut(): void;
}


const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthProviderProps {
	children: ReactNode;
}

interface IUsersProps {
	id: string;
	name: string;
	email: string;
	password: string;
	image: string;
	permission: "admin" | "employee";
}

const AuthProvider: React.FC<IAuthProviderProps> = (children) => {

	const [logged, setLogged] = useState<boolean>(() => {
		const isLogged = localStorage.getItem("@my-animes:logged");
		return !isLogged;
	});


	const [data, setData] = useState<IUsersProps[]>([]);
	const loadRegisteredUsers = async () => {
		try {
			const response = await fetch("http://localhost:5500/users");
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const result = await response.json();
			setData(result);
		} catch (error) {
			console.log(error);
		}
	};

	
	const signIn = (email: string, password: string) => {
		data.map(item => {
			if (item.email === email && item.password === password) {
				localStorage.setItem("@my-animes:logged", "true");
				setLogged(true);
			}
		});
	};


	const signOut = () => {
		localStorage.removeItem("@my-animes:logged");
		window.location.href = "http://localhost:3000/";
		setLogged(false);
	};


	useEffect(() => {
		loadRegisteredUsers();
	}, []);

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