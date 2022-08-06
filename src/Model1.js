import React, {useState} from 'react'
import ModalVideo from 'react-modal-video'


const Model1 = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="9xwazD5SyVg" onClose={() => setOpen(false)} />
            <button className='btn' onClick={()=> setOpen(true)}>Video Model</button>
        </>
    )
}

export default Model1



