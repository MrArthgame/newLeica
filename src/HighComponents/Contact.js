import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import style from './Contact.module.css'

export default function Contact() {
    return (
        <div  className={style.all}>
            <header className={style.header}>
                <div>
                    <IconButton style={{color:'#fff'}}>
                     <LocationOnIcon/>
                    </IconButton>
                    <b style={{color:'#fff'}}>Yerevan, Khanjyan 13 ,Armenia</b>
                </div>
                <div>
                    <IconButton style={{color:'#fff'}}>
                     <PhoneIcon />
                    </IconButton>
                    <b style={{color:'#fff'}}>+ 374 95 567 789</b>
                </div>
                <div>
                    <IconButton style={{color:'#fff'}}>
                     <MailIcon />
                    </IconButton>
                    <b style={{color:'#fff'}}>something@gmail.com</b>
                </div>
            </header>
            <nav className={style.nav} >
                <div>
                    <div style={{marginTop:'10px'}}>
                        <input style={{height:'40px',width:'200px',borderRadius:'15px'}} placeholder='Your Name' />
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <input style={{height:'40px',width:'200px',borderRadius:'15px'}} placeholder='Your Email' />
                    </div>                    
                    <div style={{marginTop:'10px',marginBottom:'10px'}}>
                        <Button variant="contained" color="primary" style={{borderRadius:'30px'}} >Send Message</Button>
                    </div>
                    
                </div>
                <div style={{marginTop:'10px'}}>
                    <input style={{height:'100px',width:'200px',borderRadius:'15px'}} placeholder='Your Message' />
                </div>
            </nav>
            <div className={style.mapLocation}>
            <div className="mapouter"><div className="gmap_canvas"><iframe width={1080} height={833} id="gmap_canvas" src="https://maps.google.com/maps?q=Yerevan%20Khanjyan%2013&t=&z=19&ie=UTF8&iwloc=&output=embed" title='map' frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://www.embedgooglemap.net/en/">embedgooglemap.net</a></div>
      </div>
            </div>
        </div>
    )
}
