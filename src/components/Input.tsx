'use client'
import { uploadFile } from '@/app/actions/uploadFile.ts'

export const Input = () => {
    return<>
        <input type="file" name="post_picture"/>
    </>
}