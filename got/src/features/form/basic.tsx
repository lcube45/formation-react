import React, { useEffect, useRef, useState } from 'react';

interface BasicProps {
    addCharacter: (name: string, img: string) => void
}

const Basic: React.FC<BasicProps> = ({addCharacter}) => {

    const [name, setName] = useState('')
    const [img, setImg] = useState('')

    const nameInputRef = useRef<HTMLInputElement>(null)

    const onValidateForm = () => {
        addCharacter(name, img)
    }

    useEffect(() => {
        nameInputRef?.current?.focus()
    }, [])

    return (
        <>
            <div>
                <label>Name</label>
                <input type="text" value={name} ref={nameInputRef} onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Img</label>
                <input type="text" value={img} onChange={(e) => setImg(e.target.value)}/>
            </div>
            <button onClick={onValidateForm}>Submit</button>
        </>
      )
}

export default Basic;

