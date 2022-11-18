import GloblaStyled from "./styles/GloblaStyled";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import { useTheme } from "./hooks/theme";


const App: React.FC = () => {

	const { theme } = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<GloblaStyled />
			<Routes />
		</ThemeProvider>
	);
};

export default App;
