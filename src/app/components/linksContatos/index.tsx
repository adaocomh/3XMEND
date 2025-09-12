'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'

interface EmailProps {
  destinatario?: string
  assunto?: string
  corpo?: string
}

const EmailLink: React.FC<EmailProps> = ({
  destinatario = "3xmend@gmail.com",
  assunto = "Assunto do E-mail",
  corpo = "Olá, gostaria de saber mais sobre os serviços oferecidos pela 3XMEND.",
}) => {
  const handleClick = () => {
    const encodedAssunto = encodeURIComponent(assunto)
    const encodedCorpo = encodeURIComponent(corpo)
    window.location.href = `mailto:${destinatario}?subject=${encodedAssunto}&body=${encodedCorpo}`
  }

  return (
    <a
      className="flex justify-center items-center w-[50px] h-[50px] bg-[var(--background)] rounded-full hoverSeta"
      onClick={handleClick}
    >
      <Image className='hoverSeta' src="/icons/email.png" alt="Icon do email" width={30} height={30} />
    </a>
  )
}

export default function LinksContato() {
  const [copiado, setCopiado] = useState(false)
  const emailRef = useRef<HTMLAnchorElement | null>(null)

  const copiarTelefone = () => {
    const telefone = "(11) 9 5674-7411"
    navigator.clipboard.writeText(telefone)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 1500)
  }

  return (
    <div className="flex gap-[10px]">
      <a href="https://www.instagram.com/3xmend?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="flex justify-center items-center w-[50px] h-[50px] bg-[var(--background)] rounded-full hoverSeta" target="_blank" rel="noopener noreferrer">
        <Image className='hoverSeta' src="/icons/instagram.png" alt="Icon do instagram" width={30} height={30} />
      </a>

      <a href="https://wa.me/5511956747411?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20oferecidos%20pela%203XMEND." className="flex justify-center items-center w-[50px] h-[50px] bg-[var(--background)] rounded-full hoverSeta" target="_blank" rel="noopener noreferrer">
        <Image className='hoverSeta' src="/icons/whatsapp.png" alt="Icon do whatsapp" width={30} height={30} />
      </a>

      <a onClick={copiarTelefone} ref={emailRef} className="flex justify-center items-center w-[50px] h-[50px] bg-[var(--background)] rounded-full hoverSeta">
        {copiado ? "✔" : <Image className='hoverSeta' src="/icons/telephone.png" alt="Icon do telefone" width={30} height={30} />}
      </a>

      <EmailLink />
    </div>
  )
}