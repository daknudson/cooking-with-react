import { useState } from 'react';
import Counter from './Counter';
import React from 'react'

export const ThemeContext = React.createContext({} as ThemeContextTypes)

type ThemeContextTypes ={
backgroundColor: string
}

function App() {
  const [theme, setTheme] = useState<string>('red')

  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
 <div>
    <Counter initialCount={0}/>
    <button onClick={() => setTheme(theme  === 'red' ? 'blue' : 'red')}>Toggle Theme</button>
   </div>
    </ThemeContext.Provider>

  );
}

export default App;
