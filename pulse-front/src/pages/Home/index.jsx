import React from 'react'
import Welcome from '../../components/Welcome'
import { Helmet } from 'react-helmet-async'
import Menu from '../../components/Menu'
import Slider from '../../components/Slider'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
    <Slider/>
    <Welcome/>
    <Menu/>
    </>
  )
}

export default Home