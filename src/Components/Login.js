import React, {useEffect, useReducer, useState} from "react";


function reducerFn(state,action){
    if(action.type==='email'){
        return {
            emailValue:action.payload,isEmailValid:action.payload.includes('@'),
            pass:state.pass,isPassValid:state.isPassValid
        };
    }if(action.type==='pass'){
        return {
            emailValue:state.emailValue,isEmailValid:state.isEmailValid,
            pass:action.payload,isPassValid:action.payload.trim().length>=8
        };
    }if(action.type==='clear'){
        return {
            emailValue:'',sEmailValid:'',
            pass:'',isPassValid:''
        };
    }

    return {emailValue:'',isEmailValid:false,pass:'',isPassValid:false};
}

function Login(props) {

    const[isFormValid, setIsFormValid] = useState(false);

    const[state,dispatcherFn] = useReducer(reducerFn,{
        emailValue:'', isEmailValid:false,
        pass:'',isPassValid:false
    });

    useEffect(()=>{
        setIsFormValid(state.isEmailValid && state.isPassValid);
    },[state.isEmailValid, state.isPassValid]);

    function formHandler(e){
        e.preventDefault();
        console.log("Success!",state.emailValue,state.pass)
        const obj = {
            email: state.emailValue,
            password: state.pass
        }
        props.onLogin(obj)
        dispatcherFn({type:'clear', payload:e.target.value});

    }

    const emailChangeHandler = (e) => {
        dispatcherFn({type:'email', payload:e.target.value});
    }
    const passChangeHandler = (e) => {
        dispatcherFn({type:'pass', payload:e.target.value});
    }

    return(
        <React.Fragment>
            <form onSubmit={formHandler}>
                <input type='text' value={state.emailValue} onChange={emailChangeHandler}/>
                <input type='text' value={state.pass} onChange={passChangeHandler}/>
                <button disabled={!isFormValid}>SUBMIT</button>
            </form>
        </React.Fragment>
    );
}

export default Login;