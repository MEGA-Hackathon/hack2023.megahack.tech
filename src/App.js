import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import CountdownPage from "./pages/countdown";
import { MainTheme } from "./themes";

const GlobalStyles = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		font-family: "Montserrat", sans-serif;
		color: ${({ theme }) => theme.colors.contrast};
		background-color: ${({ theme }) => theme.colors.main};
	}
	
	body, input, textarea, button {
		font-family: "Montserrat", sans-serif;
	}
`;

function App() {
	return (
		<ThemeProvider theme={MainTheme}>
			<GlobalStyles />
			<CountdownPage />
		</ThemeProvider>
	);
}

export default App;
