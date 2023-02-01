import React, { useState } from 'react';
import './Dropdown.css';
import { HiCursorClick, HiChartBar, HiOutlineShieldCheck, HiOutlineViewGrid, HiPlay, HiPhone } from "react-icons/hi";
import { AiOutlineReload } from "react-icons/ai";

function Dropdown() {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
    
    return (
        <>
            <ul onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                <li className='dropbutton'>
                        <div className='dropdown'>
                            <li><a><HiChartBar /> Analytics</a><p>Get a better understanding of where your traffic is coming from.</p></li>
                            <li><a><HiCursorClick /> Engagement</a><p>Speak directiy to your customers in a more meaningful way.</p></li>
                            <li><a><HiOutlineShieldCheck /> Security</a><p>Your customers' data will be safe and secure.</p></li>
                            <li><a><HiOutlineViewGrid /> Integrations</a><p>Connect with third-party tools that you're already using.</p></li>
                            <li><a><AiOutlineReload></AiOutlineReload> Automations</a><p>Build strategic funnels that will drive your customers to convert.</p></li>
                            <hr/>
                            <div className='dropbottom'>
                                <li><a><HiPlay />Watch demo</a></li>
                                <li><a><HiPhone />Contact Sales</a></li>
                            </div>
                        </div>
                    </li>
            </ul>
        </>
    )
}

export default Dropdown;