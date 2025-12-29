import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/shashankjain2004')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            setData(data) 
        })
    }, [])
  return (
    <div className='text-center m-4 bg-blend-color p-4 text-3xl'>Github followers: {data.followers}
    <img className=""src={data.avatar_url} alt="Git Picture" width={300} /></div>
  )
}

export default Github