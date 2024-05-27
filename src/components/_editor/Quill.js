'use client'
import React, {useRef, useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const QuillEditor = ({value, setValue, planeValue, setPlaneValue}) => {
    const ref = useRef()
    console.log('ref из компонента Quill' , ref)

    useEffect(() => {
        if(!ref){
            return
        }
        setPlaneValue(ref.current.getEditor().getText())
    }, [value])

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link',
                // 'image', 'video'
            ],
            ['clean']
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
        <ReactQuill theme="snow" value={value} onChange={setValue} className="quill-editor" modules={modules} formats={formats} ref={ref}/>
    )
}

export default QuillEditor
