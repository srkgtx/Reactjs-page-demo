import React from 'react'
import './Footer.css'
import { SiTailwindcss } from "react-icons/si";
import { MDBIcon } from 'mdb-react-ui-kit';

function footer() {
    return (
        <div className='f-content'>
            <div className='f-detail'>
                <div className='f-logo'><SiTailwindcss /></div>
                <div className='f-descript'>Making the world a better place through constructing elegant hierarchies.</div>
                <div className='social-icon'>
                    <div className='f-icon'><MDBIcon icon="facebook" /></div>
                    <div className='f-icon'><MDBIcon icon="instagram" /></div>
                    <div className='f-icon'><MDBIcon icon="twitter" /></div>
                    <div className='f-icon'><MDBIcon icon="github" /></div>
                    <div className='f-icon'><MDBIcon icon="youtube" /></div>
                </div>
            </div>
            <ul>
                <li>
                    <h6><strong>Solution</strong></h6>
                    <p>Marketing</p>
                    <p>Analytics</p>
                    <p>Commerce</p>
                    <p>Insights</p>
                </li>
            </ul>
            <ul>
                <li>
                    <h6><strong>Support</strong></h6>
                    <p>Pricing</p>
                    <p>Documentation</p>
                    <p>Guides</p>
                    <p>API Status</p>
                </li>
            </ul>
            <ul>
                <li>
                    <h6><strong>Company</strong></h6>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Jobs</p>
                    <p>Press</p>
                    <p>Partners</p>
                </li>
            </ul>
            <ul>
                <li>
                    <h6><strong>Legal</strong></h6>
                    <p>Claim</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </li>
            </ul>

            <div className='bottom-footer'>
                © 2020 Your Company,lnc. All rights reserved.
            </div>
        </div>
    )
}

export default footer