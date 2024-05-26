import { useEffect, useState } from "react"
import { Card, Navbar } from "./components"
import { ThemeContextProvider } from "./context/theme"

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="w-full h-screen bg-white dark:bg-slate-700">
        <Navbar />
        <Card />
      </div>
    </ThemeContextProvider>
  )
}

export default App
