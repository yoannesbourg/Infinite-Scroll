import React, { useEffect, useState, useRef, useCallback } from 'react';
import AxiosConfig from './config/axios.config';

import Searchbar from './components/Searchbar/Searchbar';
import Loader from './components/Loader/Loader';
import { image } from './interfaces/imagesListInterface';

import './App.scss';
import logo from './img/logo.png';

const App = (): JSX.Element => {
    const [images, setImages] = useState<image[]>();
    const [limit, setLimit] = useState<number>(100);
    const [search, setSearch] = useState<string>('');

    const containerRef = useRef(null);

    const callBackFunction = () => {
        setLimit((prev) => prev + 100);
    };

    const options = {
        root: null,
        rootMargin: '100px',
        threshold: 1,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunction, options);
        if (containerRef.current) observer.observe(containerRef.current);
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [containerRef]);

    const fecthImages = async () => {
        try {
            const response = await AxiosConfig.get(`/images?_page=0&_limit=${limit}${search && '&q=' + search}`);
            if (response.status !== 200) {
                return {
                    status: 500,
                    message: 'Error',
                };
            }
            setImages(response.data);
            return response.data;
        } catch (error) {
            return {
                status: 500,
                message: 'Error',
            };
        }
    };
    const handleSearch = (search: string) => {
        console.log(search);
        setSearch(search);
    };

    useEffect(() => {
        fecthImages();
    }, [limit, search]);
    return (
        <div>
            <div className="header container">
                <img className="header__logo" src={logo} alt="logo" />
                <Searchbar handleSearch={handleSearch} />
            </div>

            <div className="body">
                <div className="container">
                    {images ? (
                        images.map((image) => {
                            return <div key={image.id}>{image.title}</div>;
                        })
                    ) : (
                        <div>No images</div>
                    )}
                </div>
                <div ref={containerRef}></div>
            </div>
        </div>
    );
};

export default App;
