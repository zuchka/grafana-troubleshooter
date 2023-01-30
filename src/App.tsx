import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SelectSettings from './components/Home';
import EmailList from './components/installation/Installation'
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home"));
const Installation = React.lazy(() => import("./components/installation/Installation"));
const Windows = React.lazy(() => import("./components/installation/Windows"));
const Alerting = React.lazy(() => import("./components/alerting/Alerting"));
const AlertTemplating = React.lazy(() => import("./components/alerting/AlertTemplating"));

// const Battle = React.lazy(() => import("./components/Battle"));

export default function App() {
  return (
    <Router>
      <div>
        <div>
          {/* <Nav theme={this.state.theme} toggleTheme={this.toggleTheme} /> */}
          <React.Suspense fallback={<Home />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/installation" element={<Installation />} />
              <Route path="/installation/windows" element={<Windows />} />
              <Route path="/alerting" element={<Alerting />} />
              <Route path="/alerting/templating" element={<AlertTemplating />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    </Router>
    // <Container maxWidth="md">
    //   <Box sx={{ my: 4 }}>
    //     <SelectSettings />
    //     {/* <EmailList /> */}
    //     <Submit />
    //     {/* <OutputWindow /> */}
    //     {/* <FinishedModal /> */}
    //     <Copyright />
    //   </Box>
    // </Container>
  );
}