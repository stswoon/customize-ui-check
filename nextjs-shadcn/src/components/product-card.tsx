import React from "react"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProductCard() {
  return (
    <Card className="w-[320px] overflow-hidden border-none shadow-lg rounded-3xl">
      {/* Top Section with Image and Info */}
      <div className="relative h-[340px]">
        {/* Background Split */}
        <div className="absolute inset-0 flex">
          <div className="w-[45%] bg-[#FF4D00]"></div>
          <div className="w-[55%] bg-white"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full p-4 flex flex-col justify-between z-10">
          {/* Top Row */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1 text-white">
              <Badge className="bg-[#00D26A] hover:bg-[#00D26A] text-white border-none px-2 py-0.5 text-xs w-fit rounded-md mb-2">
                NEW
              </Badge>
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-none">x10</span>
                <span className="text-[10px] opacity-90">Кратность</span>
              </div>
              <div className="flex flex-col mt-3">
                <span className="text-2xl font-bold leading-none">50 мм</span>
                <span className="text-[10px] opacity-90">Диаметр</span>
                <span className="text-[10px] opacity-90">объектива</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-[10px] font-medium text-gray-600">Бинокль мощный</div>
              <div className="font-black text-xl tracking-tighter text-black leading-none">
                GA<span className="text-black">U</span>T
              </div>
              <div className="bg-[#FF4D00] text-white text-xs font-bold px-1 inline-block mt-0.5 transform -skew-x-12">
                VEGA
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 z-20">
             {/* Using a placeholder image that looks like binoculars */}
             <img 
               src="/img.png"
               alt="Binoculars" 
               className="w-full h-full object-contain drop-shadow-xl transform -rotate-12 hover:scale-105 transition-transform duration-300"
             />
          </div>

          {/* Bottom Row of Top Section */}
          <div className="flex justify-between items-end w-full">
             <div className="text-white flex flex-col gap-2">
                <div className="font-bold tracking-wider text-sm">PORRO</div>
                <Badge className="bg-[#E0B0FF] hover:bg-[#E0B0FF] text-[#5D3A9B] border-none px-2 py-0.5 text-sm font-bold rounded-full w-fit">
                  -12%
                </Badge>
             </div>

             <div className="relative">
                {/* Decorative text outline effect for 'VEGA' in background if needed, but sticking to badge for now */}
                <div className="border border-cyan-400 bg-black text-cyan-400 text-[10px] font-bold px-2 py-1 rounded shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                   <span className="text-[#E0B0FF]">ZOOM</span>
                   <div className="text-[8px] text-white text-center leading-none mt-0.5">УВЕЛИЧЕНИЕ</div>
                </div>
             </div>
          </div>
        </div>
        
        {/* Outline Text Decoration (GAUT VEGA) - stylized background text */}
        <div className="absolute right-2 top-20 text-6xl font-black text-transparent stroke-gray-200 opacity-10 pointer-events-none rotate-90 origin-right" style={{ WebkitTextStroke: "1px #ddd" }}>
          VEGA
        </div>
      </div>

      {/* Card Content (Bottom White Area) */}
      <CardContent className="pt-2 pb-6 px-5 bg-white">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-xl font-bold">5777 ₽</span>
          <span className="text-sm text-gray-400 line-through">7777 ₽</span>
        </div>
        
        <h3 className="text-sm font-medium text-gray-800 leading-tight mb-3">
          Мощный бинокль Gaut Vega с zoom-увеличением
        </h3>

        <div className="flex items-center gap-1">
          <div className="flex text-purple-600">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 stroke-current fill-transparent" />
          </div>
          <span className="text-xs text-gray-400 ml-1">77</span>
        </div>
      </CardContent>
    </Card>
  )
}
