import { useEffect } from 'react';


const useDynamicTitle = (title) => {
    useEffect(() => {
        window.document.title = `${title} - Rent Vroom`;
    }, [title])
};


export default useDynamicTitle;