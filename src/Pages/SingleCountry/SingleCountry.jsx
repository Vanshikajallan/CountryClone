import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSingleCountry} from '../../slices/singleCountrySlice'


const SingleCountry = () => {
  const dispatch = useDispatch();
  const {country} = useSelector((state) => state.singleCountry)
  const {name} = useParams();
  console.log(country)
  useEffect(()=> {
    dispatch(fetchSingleCountry(name))
  }, [])
  return (
    <div>
        
    </div>
  )
}

export default SingleCountry