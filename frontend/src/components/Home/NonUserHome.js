import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import './NonUserHome.css'

export default function NonUserHome() {
    const [photoNum, setPhotoNum] = useState(0);
    // const images = [
    //     'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/If_Only_We_Could_Turn_Back_Time_Anna_Kwa.jpg',
    //     'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Frosch_Bokeh_2_Axel_F.jpg',
    //     'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Dawn_of_Another_Day_Sky_Matthews.jpg',
    //     'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Fantasy_Island_Daniel_Cheong.jpg',
    //     'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Desert_Beauty_Christoph_Fischer.jpg',
    //     'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/sunset_1663_Junji_Aoyama.jpg',
    //     'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Cool_Power_commended-LPOTY_UK_Steve_Cole.jpg',
    //     'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Mists_of_renfrew_Adam_Gibbs.jpg',
    // ]
    const images = [
        '/images/If_Only_We_Could_Turn_Back_Time_Anna_Kwa.jpg',
        '/images/Frosch_Bokeh_2_Axel_F.jpg',
        '/images/Dawn_of_Another_Day_Sky_Matthews.jpg',
        '/images/Fantasy_Island_Daniel_Cheong.jpg',
        '/images/Desert_Beauty_Christoph_Fischer.jpg',
        '/images/sunset_1663_Junji_Aoyama.jpg',
        '/images/Cool_Power_commended-LPOTY_UK_Steve_Cole.jpg',
        '/images/Mists_of_renfrew_Adam_Gibbs.jpg'
    ]

    useEffect(() => {
        const photoInterval = setInterval(() => {
            setPhotoNum(prevNum => ++prevNum % images.length);
        }, 2000);
        return () => clearInterval(photoInterval);
    }, []);

    return (
        <>
            {
                images.length > 0 && (
                    <>
                        {images.map(image => (
                            <link rel="preload" href={image} as='image' />
                        ))}
                        <div>
                            <div id='nonuserhome-photo-container-inner' style={{ backgroundImage: `url(${images[photoNum]})` }}>
                                {/* <img id='nonuserhome-photo' src={photos[photoNum].imageUrl} /> */}
                                <h1 id='heading'>Find your inspiration.</h1>
                                <h2 id="heading-2">Join the Flickor community, home to some photos and a couple users.</h2>
                                <div>
                                    <Link to='/signup'>
                                        <button id='demo-btn'>Start for free</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <footer className="flex-row">
                            {/* <span>Connect with the developer :</span> */}
                            <div id="footer-inner" className="flex-row">
                                <div id="technologies" className="flex-row">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                                    <img src="https://i.imgur.com/MoFw3WD.png" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="" />
                                    <img src="https://i.imgur.com/E8GbqHf.png" alt="" />
                                    <img src="https://i.imgur.com/v4MGQKD.png" alt="" />
                                    <img id='last-tech' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="" />
                                    {/* <img src="" /> */}
                                </div>
                                <div id='about' className="flex-row">
                                    <a href="https://github.com/bandrewi" target='_blank'>
                                        <img className="about-image" src="https://i.imgur.com/lkKyqhT.png" alt="" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/andrew-bui-26b718237/" target='_blank'>
                                        <img className="about-image" src="https://i.imgur.com/hLlhx14.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </>
                )
            }
        </>
    )
}