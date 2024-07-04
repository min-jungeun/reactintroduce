import logo from '../img/logo.svg'

function Hd() {
    return (
        <header>
            <div className="container">
                <h1><a href=""><img src="/img/logo.png" alt="" /></a></h1>
                <h1><a href=""><img src={logo} alt="" /></a></h1>
            </div>
            
        </header>
        
    )
}

export default Hd
