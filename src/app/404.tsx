import React from "react";
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


const Custom404: React.FC = () => {
    // handler()
    return (
        <div>
            <h1>404 - Страница не найдена</h1>
            <p>Извините, запрашиваемые вами данные не найдены.</p>
        </div>
    );
};

export default Custom404;
