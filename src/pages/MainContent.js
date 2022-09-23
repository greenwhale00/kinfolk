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
                            <p className='des'>KINFOLK NOTES SPECIAL ISSUE</p>
                            <strong className='tit'>콧속 깊이</strong>
                        </figure>
                    </div>
                    <div className="right">
                        <div className="byredo">
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/assets/images/byredo.png"} alt="" />
                                <p className='dess'>KINFOLK NOTES SPECIAL ISSUE</p>
                                <span>바이레도</span>
                                <p className='blah'>벤 고햄의 코는 글로벌 기업 그 자체다. 고햄은 코가 이끄는 대로 향수 브랜드 바이레도를 만들고 키워나갔다. 이제 바이레도는 맨해튼에 신규 매장을 두고 다양한 명품 라인을 갖춘 세계적 기업으로 성장했다.</p>
                            </figure>
                        </div>
                        <div className="byredo">
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/assets/images/shower.png"} alt="" />
                                <p className='dess'>KINFOLK NOTES SPECIAL ISSUE</p>
                                <span>위안에 몸을 담그고</span>
                                <p className='blah'>치유 효과가 있는 온천수에 몸을 담근 채 아침을 보내는 것만큼 피곤한 심신에 에너지를 채워주는건 없다. 천연온천에 가든, 사우나에 가든 간에 아스라이 피어오르는 김은 피부에 생기를 주는 것 이상의 효과가 있다.</p>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="inner bottom">

                <div className="inside">
                    <div className="small">
                        <div className="byredo">
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/assets/images/Paapa_Essiedu.png"} alt="" />
                                <p className='dess'>ARTS & CULTURE</p>
                                <span>위안에 몸을 담그고</span>
                                <p className='blah'>치유 효과가 있는 온천수에 몸을 담근 채 아침을 보내는 것만큼 피곤한 심신에 에너지를 채워주는건 없다. 천연온천에 가든, 사우나에 가든 간에 아스라이 피어오르는 김은 피부에 생기를 주는 것 이상의 효과가 있다.</p>
                            </figure>
                        </div>
                        <div className="byredo">
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/assets/images/Cat_Power.png"} alt="" />
                                <p className='dess'>MUSIC</p>
                                <span>캣 파워</span>
                                <p className='blah'>뮤지션 챈 마셜 다른 차원으로 가는 문을 열다.</p>
                            </figure>
                        </div>

                    </div>
                    <div className="big">
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/assets/images/content_right.png"} alt="" />
                            <p className='des'>KINFOLK NOTES SPECIAL ISSUE</p>
                            <strong className='tit'>덤폰</strong>
                        </figure>
                    </div>
                </div>

                <span className="btn"><a href="">All Stories</a></span>
            </div>





        </section>
    )
}

export default MainContent