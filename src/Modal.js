import React, {useState} from 'react'

const Modal = () => {

    const [shouldShow, setShouldShow] = useState(false)

    return (
        <>
            <button className='btn' onClick={() => setShouldShow(true) }>Content Model</button>
        {
            shouldShow && (
                
                <div className="modelBackground" onClick={() => setShouldShow(false) }>
                    <div className="modelBody" onClick={ e => e.stopPropagation() }>
                        <button className='close' onClick={() => setShouldShow(false) }>X</button>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/9xwazD5SyVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nam saepe earum sint excepturi, perferendis ad provident temporibus quam! Natus alias beatae est. Ab accusantium nobis sapiente sunt tenetur repellat?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nam saepe earum sint excepturi, perferendis ad provident temporibus quam! Natus alias beatae est. Ab accusantium nobis sapiente sunt tenetur repellat?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nam saepe earum sint excepturi, perferendis ad provident temporibus quam! Natus alias beatae est. Ab accusantium nobis sapiente sunt tenetur repellat?</p>
                    </div>
                </div>
            )
        }
        </>
    )
}

export default Modal