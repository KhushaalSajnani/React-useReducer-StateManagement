export const Nav = (props) => {
    function logoutHandler(){
        props.onLogout();
    }
    const style = {
        height:'10vh',
        width:'100vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    };
    return(
        <div style={style}>
            <button disabled={!props.userin} onClick={logoutHandler}>LOGOUT</button>
        </div>
    );
}