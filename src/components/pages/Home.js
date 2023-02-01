import React from "react";
import '../../App.css';
import './Home.css';
import solution1 from '../../images/solution1.jpeg'
import solution2 from '../../images/solution2.jpeg'
import solution3 from '../../images/solution3.jpeg'
import solution4 from '../../images/solution4.jpeg'
import solution5 from '../../images/solution5.jpeg'
import solution6 from '../../images/solution6.jpeg'

export default function Home() {
    return (
        <div id='Home'>
            <hr />
            <div className="flex-container">
                <div className="title1">
                    <h1 className='model-title'>Meet our leadership</h1>
                    <p>Libero fames augue nisl porttitor nisi, quis. ld ac elit odio vitae elementum enim vitae ullamcorper suspendisse. Vivamus fringilla</p>
                </div>
                <div className="divider"></div>
                <div className="flex">
                    <div className="members1">
                        <div className="member">
                            <img width={100} height={100} src={solution1} />
                            <div className="description">
                                <h1>George Bluth</h1>
                                <h2>Co-Founder / CEO</h2>
                                <p>

                                </p>
                            </div>
                        </div>
                        <div className="member">
                            <img width={100} height={100} src={solution2} />
                            <div className="description">
                                <h1>Janet Weaver</h1>
                                <h2>Co-Founder / CTO</h2>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="members2">
                        <div className="member">
                            <img width={100} height={100} src={solution3} />
                            <div className="description">
                                <h1>Emma Wong</h1>
                                <h2>Manager, Business Relations</h2>
                                <p>

                                </p>
                            </div>
                        </div>
                        <div className="member">
                            <img width={100} height={100} src={solution4} />
                            <div className="description">
                                <h1>Eve Holt</h1>
                                <h2>Front-end Developer</h2>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="members3">
                        <div className="member">
                            <img width={100} height={100} src={solution5} />
                            <div className="description">
                                <h1>Charles Morris</h1>
                                <h2>Designer</h2>
                                <p>

                                </p>
                            </div>
                        </div>
                        <div className="member">
                            <img width={100} height={100} src={solution6} />
                            <div className="description">
                                <h1>Tracey Ramos</h1>
                                <h2>Director, Product Development</h2>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}