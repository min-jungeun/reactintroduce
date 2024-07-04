import logo from '../img/logo.svg'
import hdscss from './scss/hd.module.scss'

function Hd() {
    return (
        <header className={hdscss.logo}>
            <div className="container">
                <h1><a href=""><img src={logo} alt="" /></a></h1>
                <ul>
                    <li>포트폴리오</li>
                    <li>인물탐방</li>
                    <li>사전인터뷰 및 제안</li>
                </ul>
            </div>
            
        </header>
        
    )
}

export default Hd
