"use client";

import { ThemeProvider } from "@mui/material";
import { theme } from "./../themes/thems";

const Provider = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
