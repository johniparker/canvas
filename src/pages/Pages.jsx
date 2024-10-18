import { useState, useEffect } from 'react';
import { useApi } from "../api";
import RedirectButton from '../components/common/RedirectButton';

const Pages = () => {
    const [pages, setPages] = useState([]);
    const pagesApi = useApi("pages");

    const fetchPages = async () => {
        try {
            const fetchedPages = await pagesApi.getAll();
            console.log('FETCHED PAGES: ', fetchedPages);
            setPages(fetchedPages);
        } catch (error) {
            console.error("error fetching pages: ", pages)
        }
    }

    useEffect(() => {
        fetchPages();
    }, []);

    return (
        <>
        <div className="pages">
        <h2>Pages</h2>
        {pages.length > 0 ? (
          pages.map((page, index) => (
            <div key={index}>
              <h3>{page.title}</h3>
              <p>{page.content}</p>
            </div>
          ))
        ) : (
          <p>No pages available.</p>
        )}
      </div>
      <RedirectButton path="/page-edit" label="Make a page" />
    </>
    )
}

export default Pages;