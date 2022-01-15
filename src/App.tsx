import { GlobalStyles, ThemeProvider } from './styles'

import { Test } from "./components"


function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Test />
    </ThemeProvider>    
  )
}

export default App
