import React from 'react'
import img from '../images/l_glavni.jpg'
import img1 from '../images/prod11.jpg'
import img2 from '../images/newProd.jpeg'
import img3 from '../images/prod22.jpg'
import img4 from '../images/shin.jpg'
// import LatestNews from '../components/LatestNews/LatestNews'
// import Newprod from '../components/NewProducts/Newprod'
// import Solutions from '../components/Solutions/Solutions'

export default function Home() {
    return (
        <div className='perent' style={{marginTop:'10px',padding:'0 10% 0 10%'}} >
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <img alt='' src={img} style={{width:'100%'}} />
                </div> 
                <div style={{display:'flex',flexWrap:'wrap', width:'100%',justifyContent:'center'}}>
                    <div>
                        <img alt='img' src={img1} style={{width:'150px',height:'100px'}} />
                        <p>New Products</p>
                    </div>
                    <div>
                        <img alt='img' src={img2} style={{width:'150px',height:'100px'}} />
                        <p>Applicetion</p>
                    </div>
                    <div>
                        <img alt='img' src={img3} style={{width:'150px',height:'100px'}} />
                        <p>News and events</p>
                    </div>
                    <div>
                        <img alt='img' src={img4} style={{width:'150px',height:'100px'}} />
                        <p>Our partners</p>
                    </div>
                </div>




            {/* <Solutions />
            <Newprod />
            <LatestNews />             */}
        </div>
    )
}
