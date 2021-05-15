import React from 'react'
import logo from '../../images/logo.png'
import arm from '../../images/arm.jpg'
import uk from '../../images/uk1.jpg'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <div className={style.topHeader}>
                <div className={style.logo}>
                    <img alt='logo' src={logo} />
                </div>
                <div className={style.icons}>
                    <img alt='arm' src={arm} className={style.arm} />
                    <img alt='arm' src={uk} className={style.uk}/>
                    <input type='text' />
                </div>                
            </div>
            <div className={style.headerBtns}>
                <div>
                    <b><Link to='/' >Home</Link> </b>
                </div>
                <div>
                    <b><Link to='/products'>Products</Link></b>
                </div>
                <div>
                    <b><Link to='/aboutUs'>About us</Link></b>
                </div>
                <div>
                    <b><Link to='/news'>New</Link></b>
                </div>
                <div>
                    <b><Link to='/services'>Support &amp; Services</Link></b>
                </div>
                <div>
                    <b><Link to='/contact'>Contact us</Link></b>
                </div>
            </div>
        </div>
    )
}
