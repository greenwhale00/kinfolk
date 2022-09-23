import React from 'react'

const Store = () => {
    return (
        <section className='Store'>
            <div className="inner">
                <div className="whole">
                    <div class="one name">
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/assets/images/one.jpg"} alt="" />
                            <div className="frdes">
                                <p>HOME</p>
                            </div>
                        </a>
                    </div>
                    <div class="two name">
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/assets/images/two.jpg"} alt="" />
                            <div className="frdes">
                                <p>BEAUTY</p>
                            </div>
                        </a>
                    </div>
                    <div class="three name">
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/assets/images/three.jpg"} alt="" />
                            <div className="frdes">
                                <p>FOOD</p>
                            </div>
                        </a>
                    </div>
                    <div class="four name">
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/assets/images/four.jpg"} alt="" />
                            <div className="frdes">
                                <p>BOOKS</p>
                            </div>
                        </a>
                    </div>
                    <div class="five name">
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/assets/images/five.jpg"} alt="" />
                            <div className="frdes">
                                <p>GARDEN</p>
                            </div>
                        </a>
                    </div>
                    <div class="six name">
                        <a href="">
                            <img src={process.env.PUBLIC_URL + "/assets/images/six.jpg"} alt="" />
                            <div className="frdes">
                                <p>GIFT</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Store