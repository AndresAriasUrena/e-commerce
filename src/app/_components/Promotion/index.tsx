'use client'
import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
    const [time, setTime] = useState({
        days:0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)

    useEffect(() =>{
        const timerInterval = setInterval(() =>{
            const currentTime = new Date()
            const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)
            const days = Math.floor(timeDifference/ (1000*60*60*24))
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 *24 ))/ (1000 * 60 * 60))
            const minutes = Math.floor((timeDifference % (1000*60*60))/(1000*60))
            const seconds = Math.floor((timeDifference %(1000*60)/1000))

            setTime({days, hours, minutes,seconds})
            
            if(timeDifference === 0){
                clearInterval(timerInterval)
                //Handle what happens then the target date is reached
            }
        }, 1000)

        return() => {
            clearInterval(timerInterval)
        }
    }, [])
  return (
    <section className={classes.promotion}>
        <div className={classes.textBox}>
            <h3 className={classes.title}>Ofertas del Mes</h3>
            <p>Prepárate para una experiencia aromática como nunca antes con nuestas ofertas del mes. Cada adquisición viene con beneficios exclusivos haciendo este mes una celebración de elecciones atrevidas y ofertas increíbles. Que no se te pasen!</p>
            <ul className={classes.stats}>
                <StatBox label='Dias' value={time.days}/>
                <StatBox label='Horas' value={time.hours}/>
                <StatBox label='Minutos' value={time.minutes}/>
                <StatBox label='Segundos' value={time.seconds}/>
            </ul>
        </div>
    </section>
  )
}

const StatBox = ({label, value} : {label: string; value: number}) => (
    <li className={classes.statBox}>
        <h4>{value}</h4>
        <p>{label}</p>
    </li>
)

export default Promotion