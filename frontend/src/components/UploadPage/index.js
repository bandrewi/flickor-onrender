import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { uploadPhoto } from "../../store/photo";

import './UploadPage.css'

export default function UploadPage() {
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState('');
    const [content, setContent] = useState(''); //for this proj, synonymous w/ title
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const photo = await dispatch(uploadPhoto({ imageUrl, content }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        // console.log('photo', photo)
        return history.push(`/photos/${photo.photo.id}`)
    }

    const imageError = errors.find(error => error.includes('URL'))
    const descriptionError = errors.find(error => error.includes('description'))

    return (
        <div id="upload-form-container">
            {/* <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul> */}
            <form id='upload-form' onSubmit={handleSubmit}>
                <div id='upload-box'>
                    <h2 id="image-details">Image Details</h2>
                    {/* <div id='image'> */}
                    {/* <label>
                        Image URL: */}
                    <input
                        id='image-input'
                        placeholder="Image URL"
                        type='text'
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    // required
                    />
                    {imageError && <div id='image-error'>{imageError}</div>}
                    {/* </label> */}
                    {/* </div> */}
                    {/* <div id='content'> */}
                    {/* <label>
                        Description: */}
                    <input
                        id='content-input'
                        placeholder="Description"
                        type='text'
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    // required
                    />
                    {descriptionError && <div id='description-error'>{descriptionError}</div>}
                    {/* </label> */}
                    {/* </div> */}
                    <button id='upload-btn' type='submit'>Upload</button>
                </div>
            </form>
        </div>
    )
}