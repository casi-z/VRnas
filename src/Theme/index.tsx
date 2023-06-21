import React, { FC } from 'react';
import { CssBaseline } from "@mui/material"
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
import { useMemo } from "react"
import GlobalStyle from "./GlobalStyle"

interface ThemeProviderProps {
	children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {

	const theme = useMemo(
		() => createTheme({
			palette: {
				
			}
		}), []
	)
	return (
		<StyledEngineProvider injectFirst>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyle />
				{children}
			</MUIThemeProvider>
		</StyledEngineProvider>
	);
};

export default ThemeProvider;