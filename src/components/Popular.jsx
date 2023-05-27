import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Popular = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=faf1a18ab8bc4c2b9aef79d4dd310d93&number=9`)
        const data = await api.json()
        setPopular(data.recipes)
    }


    return (
        <div className='wrapper '>
            <div key={popular.title}>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "5rem"
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}> {/* each slide needs a unique key */}
                                <div className='card'>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                </div>
                            </SplideSlide>
                        )
                    })}
                </Splide>

            </div>
        </div>
    )
}


export default Popular