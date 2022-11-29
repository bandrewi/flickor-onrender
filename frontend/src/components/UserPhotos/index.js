import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { getUserPhotos } from "../../store/photo";
import Photo from "../Photo";
import './UserPhotos.css'

export default function UserPhotos() {
    // const dispatch = useDispatch();
    // const sessionUserId = useSelector(state => state.session.user.id)

    // Object.values in 2 lines of code bc on refresh can not Object.values something null
    const photos = useSelector(state => state.session.photos)
    const photosArr = photos ? Object.values(photos) : []

    //not efficient making multiple fetch calls when only have to make one and pass down as props
    //when refactoring solve this issue

    // useEffect(() => {
    //     (async () => {
    //         if (sessionUserId) {
    //             await dispatch(getUserPhotos(sessionUserId))
    //         }
    //     })()
    // }, [dispatch])

    return (
        <div id="userphotos-container-outer">
            {photosArr.length > 0 && (
                <ul id='userphotos-container'>
                    {photosArr.map(photo =>
                    (
                        <li key={photo.id}>
                            <Link to={`/photos/${photo.id}`}>
                                <Photo photo={photo} />
                            </Link>
                        </li>
                    )
                    )}
                </ul>
            )}
        </div>
    )
}