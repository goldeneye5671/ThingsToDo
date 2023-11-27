import React, { useState, useEffect } from 'react'
import axiosInstance from '../../../utils/axiosInstance';
import Loading from '../../shared/Status/Loading'
import Error from '../../shared/Status/Error'

const SearchBox = ({url, handleSelect}) => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true);
        axiosInstance.get(url, {
            params: {
                search: searchInput
            }
        })
            .then(res => {
                setSearchResults([...res.data])
                setLoading(false);
            })
            .catch(err => {
                console.error(err)
            })
    }, [searchInput, url])

    const onSubmit = (e) => {
        e.preventDefault()
    }
    
    return (
            <div className='test-label-container'>
                <input className="test-input-styling" placeholder="" value={searchInput} onChange={e => setSearchInput(e.target.value)}></input>
                <label className="test-label-styling" htmlFor="">Search</label>
                <div>
                    {loading ? <Loading /> : null}
                    {searchResults.length ? 
                        (<div style={{overflowY: "scroll", maxHeight: "350px"}}>
                            {searchResults.map(s => (
                                <>
                                    <p>{s.name}</p>
                                    <button onClick={e => {e.preventDefault(); handleSelect(s)}}>+</button>
                                </>
                            ))}
                        </div>) 
                        :
                        (<p>No results</p>)
                    }
                </div>
            </div>
  )
}

export default SearchBox
