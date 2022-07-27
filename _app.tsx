import React, {Component} from 'react';
import "../styles/globals.css"
import type {AppProps} from 'next/app'
import {useState, useEffect} from 'react'
require('antd/dist/antd.less')
import '../styles/ant.less'
require('../styles/layout.less')
function MyApp({Component, pageProps}:AppProps)
{
    const [showChild,setShowChild]=useState(false)
    useEffect(()=>
    {
        setShowChild(true)
    },[])
    if(!showChild)
    {
        return null
    }
    return<Component{...pageProps}/>
}
 
export default MyApp