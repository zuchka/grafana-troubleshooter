import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import * as ReactDOM from "react-dom/client";
// import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav";
// import Loading from "./components/Loading";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
// <ThemeProvider theme={theme}>
  //   {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  //   <CssBaseline />
  <App />
);
