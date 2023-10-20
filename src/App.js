
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () =>{
  let pageSize = 9
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="home" category="general" country="in" pageSize={pageSize} />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" category="business" country="in" pageSize={pageSize} />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" category="entertainment" country="in" pageSize={pageSize} />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" category="general" country="in" pageSize={pageSize} />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" category="health" country="in" pageSize={pageSize} />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" category="science" country="in" pageSize={pageSize} />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" category="sports" country="in" pageSize={pageSize} />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" category="technology" country="in" pageSize={pageSize} />} />
       
       </Routes>
        </Router>
      </div>
    )
  }

export default App;
