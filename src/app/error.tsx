'use client'
const BlogError = ({ error }: {error: Error}) => {
    return (
        <div className="max-w-2xl overflow-hidden mt-40 mr-auto mb-0 ml-auto pr-1 pl-1">
            <h1>400 - Неправильный запрос</h1>
            <p> { error.message } </p>
        </div>
    )
}

// https://stackoverflow.com/questions/78046132/how-to-return-a-page-with-403-status-code-in-nextjs14

export default BlogError
