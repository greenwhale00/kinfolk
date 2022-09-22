import React from 'react'
import '../css/Main.scss';

const MainContent = () => {
    return (
        <section className='MainContent'>
            <div className="inner top">
                <div className='issue'>Issue 25</div>
                <div className="inside">
                    <div className="left">
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/assets/images/content_left01.png"} alt="" />
                        </figure>
                    </div>
                    <div className="right">
                        <div className="byredo">
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/assets/images/byredo.png"} alt="" />
                            </figure>
                        </div>
                        <div className="byredo">
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/assets/images/shower.png"} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner 02">

                <div className="inside">
                    <div className="left">
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/assets/images/content_right.png"} alt="" />
                        </figure>
                    </div>
                    <div className="right">
                        <div className="byredo">
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/assets/images/byredo.png"} alt="" />
                            </figure>
                        </div>
                        <div className="byredo">
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/assets/images/shower.png"} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>





        </section>
    )
}

export default MainContent