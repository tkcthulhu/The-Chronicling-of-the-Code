import myFace from './img/consalvi-tyler.jpg'

export function ContactCard() {
    return(
        <div className="row justify-content-center">
            <div className="col-3">
                <div className="card dark">
                    <div className="card-header">
                        <h2>Tyler Consalvi</h2>
                        <div className='card-body'>
                            <img src={myFace} id='myFace'/>
                            <p className='card-text'>Let's start your project</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}