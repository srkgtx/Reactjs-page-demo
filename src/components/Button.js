import './Button.css'
import { Link } from 'react-router-dom'

export function Button() {
    return (
        <Link to='login'>
            <button className='btn' style={{backgroundColor: "#fff"}}>Sign in</button>
            <button className='btn'>Sign up</button>
        </Link>
    );
}