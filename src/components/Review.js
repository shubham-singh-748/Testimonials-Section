import React, { useState } from 'react'
import people from './data'
import { FormatQuoteRounded, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'


const Review = () => {
    const [Index, setIndex] = useState(0)
    const { name, job, image, text } = people[Index]

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0
        }
        if (number < 0) {
            return people.length - 1
        }
        return number
    }


    const nextPerson = () => {
        setIndex((Index) => {
            let newIndex = Index + 1
            return checkNumber(newIndex)
        })
    }
    const prevPerson = () => {
        setIndex((Index) => {
            let newIndex = Index - 1
            return checkNumber(newIndex)
        })
    }

    const randomPerson = () => {
        let getRandomNum = Math.floor(Math.random() * people.length)
        if (getRandomNum === Index) {
            getRandomNum = Index
        }
        setIndex(checkNumber(getRandomNum))
    }

    return (
        <div className='review'>
            <div className="img-container">
                <img src={image} alt={name} className='person-img' />
                <span className="quote-icon">
                    <FormatQuoteRounded />
                </span>
            </div>
            <h4 className="author text-2xl font-bold">{name}</h4>
            <p className="job text-4xl">{job}</p>
            <p className="info text-lg font-poppins">{text}</p>

            <div className="button-container flex flex-col gap-7 items-center">
                <div>
                    <button onClick={prevPerson} className="next-btn "><KeyboardArrowLeft style={{ fontSize: '300%' }} /></button>

                    <button onClick={nextPerson} className="prev-btn"><KeyboardArrowRight style={{ fontSize: '300%' }} /></button>
                </div>

                <button onClick={randomPerson} className="random-btn text-2xl font-serif w-[20%] py-2">surprise me</button>
            </div>
        </div>
    )
}

export default Review