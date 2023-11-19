import React, { useEffect } from 'react'
import { usePagination } from '../../../../utils/pageHelper';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function PageNavigation({dispatcher, home}) {
    
    const { limit, offset, onClickNext, onClickPrev, page } = usePagination(useSearchParams);
    const dispatch = useDispatch();

    useEffect(() => {
        const llimit = home ? 5 : limit
        const data = dispatch(dispatcher({limit: llimit, offset, page}))
        return () => {
          data.abort();
        }
      }, [dispatch, limit, offset, page, home])

    return (
    <div className={"page-nav-buttons"}>
        <button onClick={onClickPrev}>{"<-"}</button>
        <span>{`Page ${page}`}</span>
        <button onClick={onClickNext}>{"->"}</button>
    </div>
    )
}

export default PageNavigation
