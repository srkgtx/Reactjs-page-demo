import { React, useState } from 'react'
import '../../App.css'
import './Login.css'
import { SiTailwindcss, SiFacebook, SiTwitter, SiGithub } from "react-icons/si";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';

async function loginUser(credentials) {
    return fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            email,
            password
        });
        if ('token' in response) {
            localStorage.setItem('token', response.token);
            window.location.href = "./profile";
        }
    }


    return (
        
        <div className='container'>
            <hr />
            <div className='login-form'>
                <div className='login-logo'>
                    <SiTailwindcss />
                </div>
                <h4>Sign in to your account</h4>
                <br />
                <div className='font-or'>Or
                    <div className='font-14'>start your 14-day free trail</div>
                </div>
                <br />
                <h3>Sign in with</h3>
                <div className='social-login'>
                    <button className='button'>
                        <SiFacebook />
                    </button>
                    <button className='button'>
                        <SiTwitter />
                    </button>
                    <button className='button'>
                        <SiGithub />
                    </button>
                </div>
                <form noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="Email Address"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot your password?
                            </Link>
                        </Grid>
                    </Grid>
                    <br />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
            <div className='img-src'></div>
        </div>
    )
}