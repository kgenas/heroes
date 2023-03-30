import { useEffect } from 'react';
import './App.css';
import { AppRouter } from './routers/AppRouter'

function App() {  
    
  const init = () => {
    return JSON.parse(localStorage.getItem("user") || '{}') || { logged: false }
  }  
  const user:any = init();
  useEffect( () =>{    
    if(!user) return;
    localStorage.setItem('user',JSON.stringify(user));
  }, [ user ])
  return (
    <AppRouter/>
  );
}

export default App;
