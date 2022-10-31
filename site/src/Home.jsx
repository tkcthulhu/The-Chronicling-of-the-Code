import HomePic from './img/home.jpg'
import NameLogo from './img/logoName.png'

export function Home(props) {
    return (
        <div className="container fluid">
            <div className="row-12 title-row">
                <div className="col d-flex justify-content-center" >
                    <img src={HomePic} alt="Very intelligent looking computer" id='home-pic'/>
                    <img src={NameLogo} alt="Very Handsome Sounding Guy" className='overlay fadeIn' />
                </div>
            </div>
        </div>
    )
}