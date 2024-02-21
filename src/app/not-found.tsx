// import React from 'react'
// import {NextApiRequest, NextApiResponse} from 'next';
//
// type ResponseData = {
//     message: string
// }
// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<ResponseData>
// ) {
//     res.status(404).json({ message: 'page not found' });
// }

const Custom404 = () => {
    // handler()
    return (
        <div className="max-w-2xl overflow-hidden mt-40 mr-auto mb-0 ml-auto pr-1 pl-1">
            <h1>404 - Страница не найдена</h1>
            <p>Извините, запрашиваемые вами данные не найдены.</p>
        </div>
    )
}

export default Custom404
