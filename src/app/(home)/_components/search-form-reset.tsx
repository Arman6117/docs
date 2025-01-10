'use client'

import Link from "next/link"

import { X } from "lucide-react"

const SearchFormReset = () => {
  const reset =async () => {
    const form = document.querySelector('.search-form') as HTMLFormElement
    if(form) form.reset()
  }
  return (
    <button className="absolute right-0 top-3 mr-5" onClick={reset}>
      <Link href="/"><X className="size-6 text-black"/></Link>
    </button>
  )
}

export default SearchFormReset