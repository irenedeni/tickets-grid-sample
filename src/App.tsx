import { GlobalStyles, ThemeProvider } from './styles'

import { TicketsSlice } from "./slices"


function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <TicketsSlice/>
    </ThemeProvider>    
  )
}

export default App
