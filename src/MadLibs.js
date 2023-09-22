import React, { useState } from 'react'
import MadLibsForm from './MadLibsForm.js';
import MadLibsStory from './MadLibsStory.js';


const MadLibs = () => {
    const [ story, setStory ] = useState('')
    const updateStory = (newStory) => {
        setStory(newStory)
    }

    return (
        <div className='MadLibs'>
            <h1>React MadLibs</h1>
            <MadLibsForm updateStory={updateStory} />
            <MadLibsStory story={story} />
        </div>
    )

}

export default MadLibs