import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const PaginationContainer = () => {
  const {meta} = useLoaderData()
  const {pageCount, page} = meta.pagination
  const pages = Array.from({length:pageCount}, (val, index) => {
    return index + 1
  })

  const {search, pathname} = useLocation()
  const navigate = useNavigate()
  const handlePageChange = (pageNumber) => {
    const searchParam = new URLSearchParams(search)
    searchParam.set('page', pageNumber)
    console.log(searchParam);
    navigate(`${pathname}?${searchParam.toString()}`)
  }
  if(pageCount < 2) {
    return null 
  }
  return (
    <div className='mt-16 flex justify-end '>
      <div className="join">
        <button className='btn btn-xs sm:btn-md join-item' onClick={() => {
          let prevPage =  page - 1 
          if(prevPage < 1){
            prevPage = pageCount
          }
          handlePageChange(prevPage)
        }}>
          Prev
        </button>
        {
          pages.map((pageNumber) => {
            return <button key={pageNumber} onClick={() => {

              handlePageChange(pageNumber)
            }}
            className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber === page ?"bg-base-300" : ""}`}
            >{pageNumber}</button>
          })
        }
        <button className='btn btn-xs sm:btn-md join-item' onClick={() => {
          let nextPage =  page + 1 
          if(nextPage >  pageCount){
            nextPage = 1
          }
          handlePageChange(nextPage)
        }}>
          Next
        </button>
      </div>
    </div>
  )
}

export default PaginationContainer