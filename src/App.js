import Login from "./Components/Login";
import {useEffect, useState} from "react";
import {Nav} from "./Components/Nav";
import {Exists} from "./Components/Exists";


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(()=>{
      const userData = localStorage.getItem('isLoggenIn');
      if(userData === '1'){
          setIsLoggedIn(true);
      }
  },[isLoggedIn]);

function logoutHandler(){
    localStorage.clear();
    setIsLoggedIn(false)
}
  function loginHandler(userData){
      console.log(userData);
      localStorage.setItem("isLoggenIn","1");
      setIsLoggedIn(true);
  }
  return (
    <div>
        <Nav onLogout={logoutHandler} userin={isLoggedIn} />
        {isLoggedIn?<Exists/>:<Login onLogin={loginHandler}/>}
    </div>
  );
}

export default App;
