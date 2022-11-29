import './Photo.css'

export default function Photo({ photo }) {
    return (
        <img id={`photo-${photo.id}`} className='photo user-photo' src={photo.imageUrl} alt="" />
    )
}