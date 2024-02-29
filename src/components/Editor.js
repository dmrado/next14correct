'use client'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useEffect, useRef, useState } from 'react'

const Editor = ({ defaultValue }) => {
    const [ value, setValue ] = useState(defaultValue ? defaultValue : '')
    const ref = useRef(null)

    // useEffect(() => {
    //     if(!ref) {
    //         return
    //     }
    //     const textValue = ref.current.getEditor().getText()
    //     setValue(textValue)
    //     console.log('ref.getText()', textValue)
    //     // document.querySelector('#hidden_html').setAttribute('value', textValue)
    // }, [ value ])

    const modules = {
        toolbar: [
            [{ 'header': [ 1, 2, false ] }],
            [ 'bold', 'italic', 'underline', 'strike', 'blockquote' ],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            [ 'link',
                // 'image', 'video'
            ],
            [ 'clean' ]
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link',
        // 'image', 'video'
    ]

    return (
        <>
            <textarea className='hidden h-0' name="text" value={value} id=""></textarea>
            <ReactQuill ReactQuill theme="snow"
                value={value}
                onChange={setValue}
                modules={modules}
                formats={formats}
                ref={ref}
                className='text-gray-700'
            />
        </>
    )
}

export default Editor