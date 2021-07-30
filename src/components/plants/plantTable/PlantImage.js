import React, {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

const ImageSearch =(props)=>{
const [url, setUrl] = useState('')
const [loading, setLoading] = useState(false)

const fetchImage=()=>{
    setLoading(true)
    fetch(`https://serpapi.com/search.json?q=${props.name}+plant&tbm=isch&ijn=0&api_key=698b07d1b636a3698edcf0a3b6c54effea09e4484c131023adc496c06c2a93ec`)
    .then(res => res.json())
    .then(data =>{
    if(data.images_results){
        setUrl(data.images_results[0].thumbnail)
    }else{
        setUrl('https://images.unsplash.com/photo-1623018035782-b269248df916?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')}
    })
    .then(setLoading(false))
    .catch(err => console.log(err))
}

useEffect(() => {
    fetchImage();
}, [])




return(
    <>
    {loading ? <Loader type='Oval' color='rgb(65, 105, 65)'/> :
    <img style={{height: '100px', width: '100px', padding: '0'}} src={url} alt='plant'/>
    }
    </>
)

}

export default ImageSearch;