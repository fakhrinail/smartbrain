import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your picture. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    {/* onChange is a React synthethic element mimicking an HTML onChange */}
                    <input type='text' className='f4 pa2 w-70 center' onChange={ onInputChange } />
                    <button 
                        className='w-50 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={ onButtonSubmit}
                        >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm