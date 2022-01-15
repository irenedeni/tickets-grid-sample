import React from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { theme } from "./theme"

export { default as GlobalStyles } from "./globalStyles"


export const ThemeProvider = (props: any) => {
  return (
    <StyledThemeProvider theme={theme}>
      {props.children}
    </StyledThemeProvider>
  )
}