import React from 'react'
import style from "./Design.module.css"

const Design = () => {
  return (
    <div className={style.design}>
      <div className={style.insideDiv}>
        <h1 align="center" className={style.h1}>Movie Calling</h1>
        <h3 align="center">Book your favourite movie here....</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oSHiHH5Dq00ZLMosvZ5qXTyr52ndfRiLxA&usqp=CAU" alt="" />
      </div>

    </div>
  )
}

export default Design
