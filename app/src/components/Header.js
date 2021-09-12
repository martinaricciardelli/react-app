import Nav from "./NavBar"


const Header = ({titulo}) => {

    return (
        <>
        <header>
            <h1 className="logo">{titulo} </h1>
            <Nav/>
        </header> 
        
        </>
    )
}

export default Header