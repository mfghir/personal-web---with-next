import MenuItem from '@/components/common/MenuItem'
import { useRouter } from 'next/router'
import React from 'react'

const Langs = () => {
    const {locale ,push} =useRouter()
    console.log(locale);

    if(locale){
      push(`langs/${locale}`)
    }

  return (
    <div>     test - {locale}
    </div>
  )
}

export default Langs