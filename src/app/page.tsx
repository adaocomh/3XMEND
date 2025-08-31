import VideoCards from "./components/videoCard";
import BtnSobre from "./components/btnSobre"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-[5vw] py-[5vw] max-w-[1200px]">
      <h2 className="text-[30px] text-center font-extrabold">Cuidamos do seu negócio, desde o posicionamento ao clique que gera vendas.</h2>
      <div  className="flex justify-between w-[100%]">
        <div className="flex flex-col gap-[8vw] w-[40%]">
          <div className="flex flex-col items-center w-[100%]">
            <VideoCards src="/videos/social-media.mp4"/>
            <h4 className="text-[18px] font-bold">Social media</h4>
            <p className="text-[12px]">Ver mais...</p>
          </div>
          <div className="flex flex-col items-center">
          <VideoCards src="/videos/social-media.mp4"/>
            <h4 className="text-[18px] font-bold">Produtora de video</h4>
            <p className="text-[12px]">Ver mais...</p>
          </div>
        </div>
        <div className="flex flex-col gap-[8vw] mt-[13vw] w-[40%]">
          <div className="flex flex-col items-center w-[100%]">
          <VideoCards src="/videos/social-media.mp4"/>
            <h4 className="text-[18px] font-bold">T.I.</h4>
            <p className="text-[12px]">Ver mais...</p>
          </div>
          <div className="flex flex-col items-center">
          <VideoCards src="/videos/social-media.mp4"/>
            <h4 className="text-[18px] font-bold">Parceiros</h4>
            <p className="text-[12px]">Ver mais...</p>
          </div>
        </div>
      </div>
      <BtnSobre/>
    </div>
  );
}
