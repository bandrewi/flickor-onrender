// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { getUserPhotos } from '../../store/photo'

import Photo from '../Photo'
import './UserHome.css'

export default function UserHome({ photos }) {
    // const dispatch = useDispatch()
    // const user = useSelector(state => state.session.user)

    // useEffect(() => {
    //     dispatch(getUserPhotos(user.id))
    // }, [dispatch])

    return (
        <div id='userhome-photo-container-outer'>
            <div id='ppl-to-follow'>
                {/* <div>People to follow</div> */}
            </div>
            <ul id='userhome-photo-container'>
                {photos.map(photo => (
                    <li key={photo.id} className='photo-container'>
                        <Link to={`/photos/${photo.id}`} className='photo'>
                            <Photo photo={photo} />
                        </Link>
                        <div className='photo-content'>{photo.userName} </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}