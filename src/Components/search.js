import { Button } from 'bootstrap'
import React from 'react'
import { useState } from 'react'

const Search = ({FetchImage,text,setText}) => {
    const submit=(e)=>{ 
        let data =({text:text,page:1})
        FetchImage(data)
    }
    return (
        <div className="row justify-content-center">
            <div className="col-md-8 d-flex">
                        <input type="search" placeholder="enter to search"
                        className="col-md-5 form-control m-4 p-3" 
                        name='searchvideo' value={text}
                        
                        onChange={e=>setText(e.target.value)}
                        >
                        </input>
                        <button className='btn btn-primary m-4 pl-1' onClick={e=>submit(e)}>Search</button>
            </div>
        </div>
    )
}

export default Search
