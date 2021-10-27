import React, { useEffect, useState } from 'react';
import AxiosConfig from './config/axios.config';

import Searchbar from './components/Searchbar/Searchbar';
import Loader from './components/Loader/Loader';
import { image } from './interfaces/imagesListInterface';

import './App.scss';
import logo from './img/logo.png';

const App = (): JSX.Element => {
    const [images, setImages] = useState<image[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fecthImages = async () => {
        try {
            setIsLoading(true);
            const response = await AxiosConfig.get(`/images`);
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
    const handleSearch = () => {
        return;
    };

    useEffect(() => {
        fecthImages();
    }, []);
    return (
        <div>
            <div className="header container">
                <img className="header__logo" src={logo} alt="logo" />
                <Searchbar handleSearch={handleSearch} />
            </div>

            <div className="body">
                <div className="container">
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            {images ? (
                                images.map((image) => {
                                    return <div key={image.id}>{image.title}</div>;
                                })
                            ) : (
                                <div>No images</div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
