

import {useState} from 'react';


function name () {
    const [value,setValue] = useState(false);
onClick = {() => {!value ? setValue(true):setValue(false)} }

import {useEffect} from 'react';

useEffect(() => {//runs on every render});

useEffect(() => {//runs only once},[]);

useEffect(() => {//runs on first render and anytime values in array change},[prop,state]);

//Parent

import {createContext, useContext} from 'react';

const UserContext = createContext();

<UserContext.Provider value={user}>
    <h1>{user}</h1>
</UserContext.Provider>

//Child

import { createContext, useContext} from 'react';

const user = useContext(UserContext);

//count amount of render

import {useRef} from 'react';

const count = useRef(0);

const count = {current: 0}

// Access DOM elements

import {useRef} from 'react';

const inputElement = useRef();

const focusInput = () => {
    inputElement.current.focus();
}

//tracking state renders

const prevValue = useRef('');

useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

useCallback(callback,dependencies)
