import { useState } from 'react';
import { useApi } from "../api";

const Pages = () => {
    const [pages, setPages] = useState([]);
    const pagesApi = useApi("pages");

    const fetchPages = async () => {
        try {
            const fetchedPages = await pagesApi.getAll();
            setPages(fetchedPages);
        } catch (error) {
            console.error("error fetching pages: ", pages)
        }
    }
    return <div>PAGES</div>
}

export default Pages;