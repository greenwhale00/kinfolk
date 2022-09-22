import React from 'react'
import '../css/Main.scss';


const MainVisual = () => {
    return (
        <section className='MainVisual'>
            <figure className='inner'>
                <img src={process.env.PUBLIC_URL + "/assets/images/MainVisual.png"} alt="" />
            </figure>
        </section>
    )
}

export default MainVisual