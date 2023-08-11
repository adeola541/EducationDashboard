import { useState,  React} from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes , Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Courses";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar  isSidebar={isSidebar} />
          <main className="content">
            <Topbar  setIsSidebar={setIsSidebar} />
           <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/course" element={<Course/>}/>     
           </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
