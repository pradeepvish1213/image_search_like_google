import React, { useState } from 'react'
import Pagination from 'react-responsive-pagination';

const PaginationComponent = ({currentPage,totalPages,handlePageChange}) => {

    
  return (
    <Pagination
    total={totalPages}
    current={currentPage}
    onPageChange={page => handlePageChange(page)}
  />
  )
}

export default PaginationComponent