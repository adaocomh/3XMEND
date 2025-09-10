import FallingText from "../../components/fallingText"
import HamburgerCursor from "../../components/cursorMenu"
import Image from "next/image"
import Link from "next/link"
import Data from "../../data/dataProd.json"
import DataOutros from "../../data/data.json"
import Cards from "@/app/components/CardsOutros"
import Slide from "@/app/components/elementosSlides"

type CardsProps = {
    src: string;
    poster: string;
    ver: string;
    title: string;
    subTitle: string;
    desc: string;
    produto: string;
  };
  
  type CardsOutrosProps = {
    id: number;
    src: string;
    poster: string;
    title: string;
    ver: string;
    href: string;
  };

export default async function PaginaDinamicProd({ params } : 
    { params: Promise<{produto: string}> }){
        const { produto } = await params
        
        const item = Data.find((obj: CardsProps) => obj.produto === produto);

  if (!item) return

  const outros =  DataOutros.outros

  const icons = item.icon
  const desc = item.descIcon
  const imgs = item.imgs

  return (
    <div className="flex flex-col items-center w-[100vw]">
    <header className="relative w-[100vw] h-[100vh]">
      { item.src ? <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      /> : <img src={item.poster} className="absolute inset-0 w-full h-full bg-top"/>}
      <div className="absolute inset-0 flex flex-col items-center justify-between bg-[rgba(0,0,0,0.8)] p-[40px]">
        <div className="flex justify-between w-full">
          <Link href="/">
            <FallingText text="3XMEND" />
          </Link>
          <div className="flex gap-[60px] items-center">
            <div className="relative flex">
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] border-r border-[var(--background)] hoverSeta">BR</p>
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] border-r border-[var(--background)] hoverSeta">EUA</p>
              <p className="flex items-center text-[16px] text-(--background) h-[16px] text-center font-medium p-[8px] hoverSeta">ES</p>
            </div>
            <div className="flex justify-center items-center">
              <HamburgerCursor />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[48px] font-extrabold text-[#F5F5F5]">{item.title}</p>
        </div>
        <div className="self-center">
          <Image className="bounce" src="/icons/down-arrow.png" alt="seta" width={40} height={40}/>
        </div>
      </div>
    </header>
    <main className="flex flex-col items-start justify-center gap-[5vw] pt-[2vw] pb-[5vw] max-w-[1200px]">
      <div className="flex flex-row justify-between gap-[1vw] my-[2vw]">
        <div className="flex flex-col gap-[1vw] my-[2vw] w-[60%]">
          <Slide><h2 className="text-[50px] text-start font-black">{item.title}</h2></Slide>
          <Slide><h3 className="text-[35px] text-start font-bold">{item.subTitle}</h3></Slide>
          <Slide><p className="text-start text-[18px] text-[#575757]">{item.desc}</p></Slide>
        </div>
              
        {icons && (
        <div className="flex flex-col justify-between my-[2vw]">
          {Array.from({ length: 7 }).map((_, i) => {
            const alts = [
              "icon de localização",
              "icon de drone",
              "icon de chroma key",
              "icon de carteira de dinheiro",
              "icon de qualidade",
              "icon de equipamentos de gravação",
              "icon de localização",
            ];
            return (
              <Slide>
              <div key={i} className="flex gap-[20px] items-center">
                <img className="w-[30px] h-[30px]" src={icons[i]} alt={alts[i]}/>
                <h6 className="text-[18px] font-medium">{desc[i]}</h6>
              </div>
              </Slide>
            );
          })}
        </div>)}
              
      </div>
      {imgs ? <div className="flex flex-col gap-[2vw]">
        {imgs.map((img, i) => (
            <img key={i} src={`/imgsProdutora/${img}`} alt={`Imagem ${i + 1}`} className="w-full h-auto rounded-[10px]"/>
          ))} </div> 
          : ""}
      <h2 className="text-[30px] self-center font-extrabold">Outros serviços.</h2>
      <div className="flex justify-center flex-wrap gap-x-[5%] gap-y-[60px] w-[100%]">
      {outros.map((card: CardsOutrosProps) => (
          <div className="w-[30%]">
            <Cards key={card.id} {...card} />
          </div>
        ))}
      </div>
    </main>
  </div>
  );
}