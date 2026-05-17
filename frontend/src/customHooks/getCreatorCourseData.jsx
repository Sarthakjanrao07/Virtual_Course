import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import axios from 'axios'
import { setCreatorCourseData } from '../redux/courseSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const getCreatorCourseData = () => {
  const dispatch = useDispatch()
  const { userData } = useSelector(state => state.user)
  return (
    useEffect(() => {
      const getCreatorData = async () => {
        if (!userData) return; // Don't fetch if no user is logged in
        try {
          const result = await axios.get(serverUrl + "/api/course/getcreatorcourses", { withCredentials: true })
          await dispatch(setCreatorCourseData(result.data))
          console.log(result.data)
        } catch (error) {
          console.log(error)
          // Only show toast if it's NOT a token error
          if (error.response?.data?.message !== "user doesn't have token") {
            toast.error(error.response?.data?.message || "Something went wrong")
          }
        }
      }
      getCreatorData()
    }, [userData])
  )
}

export default getCreatorCourseData
