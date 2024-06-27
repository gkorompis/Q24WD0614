
import { useState } from 'react';
import './App.css';
import globalStates from './utils/global'
import { useWindowSize } from '@uidotdev/usehooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';


function App() {
  const globalContext = globalStates && globalStates.globalContext as any;

  const [windowWidthClass, setWindowWidthClass] = useState("w-pc");
  const windowSize = useWindowSize() as {width: any, height: any};
  const windowWidth = windowSize && windowSize.width;
  const windowHeight = windowSize && windowSize.height;
  
  return (
    <globalContext.Provider value={{
        windowSize, 
        windowWidthClass, 
        windowHeight,
        windowWidth
      }}>
        <BrowserRouter>
          {/* <ScrollToTop/> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/musics" element={<Home/>} />
            <Route path="/store" element={<Home/>} />
            <Route path="/artist" element={<Home/>} />
          </Routes>
        </BrowserRouter>
    </globalContext.Provider>
  );
}

export default App;
