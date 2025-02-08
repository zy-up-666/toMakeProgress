import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'simplebar/dist/simplebar.css';
import SimpleBar from 'simplebar';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
new SimpleBar(document.querySelector('chatbot-body')); // Initialize the SimpleBar on the chatbot-body element
