import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RegisterForm} from "./RegisterForm/RegisterForm";
import {RegisterForm2} from "./RegisterForm2/RegisterForm2";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegisterForm />
    <RegisterForm2 />
  </StrictMode>,
)
