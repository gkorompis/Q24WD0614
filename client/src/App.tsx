
import { useEffect, useState } from 'react';
import './App.css';
import globalStates from './utils/global'
import { useWindowSize } from '@uidotdev/usehooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Home } from './pages';
import { ScrollToTop } from './components';


function App() {
  const globalContext = globalStates && globalStates.globalContext as any;

  const [windowWidthClass, setWindowWidthClass] = useState("w-pc");
  const windowSize = useWindowSize() as {width: any, height: any};
  const windowWidth = windowSize && windowSize.width;
  const windowHeight = windowSize && windowSize.height;
  const [screensOffset, setScreensOffset] = useState({} as any);
  
  useEffect(
    ()=>{
      if(+windowWidth < 650){
      setWindowWidthClass("w-mob");
    }

    else if (+windowWidth >= 650 && +windowWidth < 1025) {
      setWindowWidthClass("w-tab");
    }
    
    else {
      setWindowWidthClass("w-pc");
    }
    }, [windowSize, windowWidth, windowHeight, screensOffset]
  )
  
  return (
    <globalContext.Provider value={{
        windowSize, 
        windowWidthClass, 
        windowHeight,
        windowWidth,
        screensOffset,
        setScreensOffset
      }}>
        <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/store" element={<Home/>} />
            <Route path="/artist" element={<Home/>} />
          </Routes>
        </BrowserRouter>
    </globalContext.Provider>
  );
}

export default App;
