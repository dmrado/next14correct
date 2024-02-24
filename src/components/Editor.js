'use client'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useEffect, useRef, useState } from 'react'

const Editor = ({ defaultValue }) => {
    const [ value, setValue ] = useState(defaultValue ? defaultValue : '')
    const ref = useRef(null)

    useEffect(() => {
        if(!ref) {
            return
        }
        setValue(ref.current.getEditor().getText())
        console.log('ref.getText()', ref.current.getEditor().getText())
    }, [ value ])

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
        <div className='h-24 text-2xl text-red-600'>
            <ReactQuill ReactQuill theme="snow"
                value={value}
                onChange={setValue}
                className='min-h-42 bg-blue-300'
                modules={modules}
                formats={formats}
                ref={ref}
            />
        </div>
    )
}

export default Editor