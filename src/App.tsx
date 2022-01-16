import { GlobalStyles, ThemeProvider } from './styles'

import { TicketsPanel } from "./slices"


function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <TicketsPanel/>
    </ThemeProvider>    
  )
}

export default App
