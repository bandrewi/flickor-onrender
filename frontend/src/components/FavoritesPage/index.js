import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getFavorites } from "../../store/favorite"

export default function FavoritesPage() {
    const dispatch = useDispatch()
    const favorites = useSelector(state => Object.values(state.favorites))

    useEffect(() => {
        dispatch(getFavorites())
    }, [dispatch])

    return (
        <div id="userphotos-container-outer">
            <ul id='userphotos-container'>
                {favorites.map(favorite => (
                    <li key={favorite.id}>
                        <Link to={{
                            pathname: `/favorites/${favorite.photoId}`,
                            state: {
                                linkFav: favorite.id
                            }
                        }}
                        >
                            <img className='photo user-photo' src={favorite.imageUrl} alt="" />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}