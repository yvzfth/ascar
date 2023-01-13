import React, { Dispatch, SetStateAction } from 'react';
import { ICar } from '../types';
export const CarContext = React.createContext<ICar[]>([]);
