"use client"

import { Typography } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import React from 'react'


export default function AboutPage() {
  const searchParams = useSearchParams()
  const person = searchParams.get("person")
  // console.log(person);
  const res = JSON.parse(person)
  const {name, age} = res

  return (
    <div><Typography variant="h4">{name}, {age} ans</Typography></div>
  )
}
