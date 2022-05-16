import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App/index.js';
//import { getActiveElement } from '@testing-library/user-event/dist/utils';

const element = document.getElementById('root')

const root = createRoot(element);
root.render(<App/>);


