import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import AxiosConfig from './config/axios.config';

import Searchbar from './components/Searchbar/Searchbar';
import Loader from './components/Loader/Loader';
import Card from './components/Card/Card';
import { image } from './interfaces/imagesListInterface';

import './App.scss';
import logo from './img/logo.png';

const App = (): JSX.Element => {
    const [images, setImages] = useState<image[]>();
    const [limit, setLimit] = useState<number>(100);
    const [search, setSearch] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const containerRef = useRef(null);

    const callBackFunction = () => {
        setLimit((prev) => prev + 10);
    };

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '100px',
            threshold: 1,
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(callBackFunction, options);
        if (containerRef.current) observer.observe(containerRef.current);
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [containerRef]);

    const fecthImages = async () => {
        try {
            setIsLoading(true);
            const response = await AxiosConfig.get(`/images?_page=0&_limit=${limit}${search && '&q=' + search}`);
            if (response.status !== 200) {
                return {
                    status: 500,
                    message: 'Error',
                };
            }
            setImages(response.data);
            setIsLoading(false);
            return response.data;
        } catch (error) {
            return {
                status: 500,
                message: 'Error',
            };
        }
    };

    const likeImage = async (updatedImage: image) => {
        try {
            const response = await AxiosConfig.put(`/images/${updatedImage.id}`, { ...updatedImage });
            if (response.status !== 200) {
                return {
                    status: 500,
                    message: 'Error',
                };
            }
            console.log('likeImage', response.data);
            return response.data;
        } catch (error) {
            return {
                status: 500,
                message: 'Error',
            };
        }
    };

    const handleSearch = (search: string) => {
        setSearch(search);
    };

    const handleLike = (image: image) => {
        const updatedImage = {
            ...image,
            liked: !image.liked,
            likes_count: image.liked ? image.likes_count - 1 : image.likes_count + 1,
        };
        likeImage(updatedImage).then(() => fecthImages());
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
                <div className="container body__imageList">
                    {images ? (
                        images.map((image, i) => {
                            return <Card key={image.id} image={image} handleLike={() => handleLike(image)}></Card>;
                        })
                    ) : (
                        <Loader />
                    )}
                    {/* {isLoading && <Loader />} */}
                    <div ref={containerRef} />
                </div>
            </div>
        </div>
    );
};

export default App;
