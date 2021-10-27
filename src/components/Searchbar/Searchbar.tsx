import React, { ChangeEvent, useEffect, useState } from 'react';

import useDebounce from '../../hooks/useDebounce';

import { BiSearch } from 'react-icons/bi';
import './Searchbar.scss';

const Searchbar = ({ handleSearch }: { handleSearch: (value: string) => void }): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value, 500);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    useEffect(() => {
        handleSearch(value);
    }, [debouncedValue]);
    return (
        <div className="searchbar">
            <BiSearch style={{ color: '#393939', width: '20px' }} />
            <input
                className="searchbar__input"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="You're looking for something?"
            />
        </div>
    );
};

export default Searchbar;
