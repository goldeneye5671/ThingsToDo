import React, { useState, useEffect, useRef } from 'react'
import axiosInstance from '../../../utils/axiosInstance';
import Loading from '../../shared/Status/Loading'
import Error from '../../shared/Status/Error'

const SearchBox = ({url, handleSelect}) => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false)
    const [resVisible, setResVisible] = useState(false)

    const searchContainerRef = useRef(null);

    useEffect(() => {
        let timeoutId;

        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(url, {
                    params: {
                        search: searchInput
                    }
                })
                setSearchResults(response.data)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false);
                setResVisible(true);
            }
        }

        timeoutId = setTimeout(fetchData, 500);

        return () => clearTimeout(timeoutId);
    }, [searchInput, url])
    
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
            setResVisible(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    return (
            <div className='test-label-container' ref={searchContainerRef}>
                <input 
                    onFocus={e => setResVisible(true)}
                    className="test-input-styling"
                    placeholder="" 
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)} 
                    type='search'
                />
                <label className="test-label-styling" htmlFor="">Search</label>
                <div>                    
                    <>
                    {resVisible && (<>
                        {searchResults?.length ? 
                            (<div 
                                style={
                                    {
                                        overflowY: "scroll",
                                        maxHeight: "350px",
                                        position: "absolute",
                                        zIndex: 1,
                                        background: "white",
                                    }
                                }
                            >
                                {searchResults.map(s => (
                                    <>
                                        <p>{s.name}</p>
                                        <button onClick={e => {e.preventDefault(); handleSelect(s); setResVisible(false)}}>+</button>
                                    </>
                                ))}
                            </div>) 
                            :
                            (<p>No results</p>)
                        }
                    </>)}
                    </>
                </div>
            </div>
  )
}

export default SearchBox
