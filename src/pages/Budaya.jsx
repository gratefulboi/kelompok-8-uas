import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import gambarMain from '../assets/budaya.jpg'
import gambarMangongkalHoli from '../assets/mangongkalholi.jpg'


export default function Budaya() {
  return (
    <>
    <div className='m-10 flex flex-col justify-center items-center'>
        <h1 className='flex justify-center items-center m-10 text-3xl font-rubik'>Adat & Budaya</h1>
        <p className='text-center text-xl w-3/4'>
          Setiap keindahan, keanekaragaman, dan keunikan tiap daerah terlukiskan didalam budaya-budaya yang diwariskan turun temurun.
          Sumatera Utara, dengan keragaman budayanya memberikan warna dan ciri khas yang mempesona, seolah-olah setiap motif ulos dan
          alunan musik gondang membawa kita masuk untuk mengenal harta karun budaya Sumatera Utara lebih dalam.
        </p>
        <Card className='m-10 rounded-2xl bg-krem w-4/5 shadow-xl'>
            <div className='overflow-hidden rounded-t-xl'>
                <img className='rounded-t-xl cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out' src={gambarMain} />
            </div>
          <CardContent className='flex justify-center items-center mt-5'>
            <p className='text-justify'>Sumatera Utara merupakan daerah yang dihuni oleh berbagai macam suku yang memiliki keragaman budaya masing-masing 
              suku tersebut, Sumatera Utara banyak dihuni oleh suku yang tergolong dari Melayu Tua dan Melayu Muda. Mayoritas penduduk asli Sumatera Utara terdiri
              dari Suku Batak, Suku Nias, Suku Melayu, dan Suku Aceh. Daerah pesisir Sumatera Utara tepatnya timur dan barat didiami oleh Suku Melayu dan Suku Mandailing.
              Suku Batak banyak mendiami di daerah pegunungan, dan Suku Nias yang mendiami kepulauan sebelah barat. Sumatera Utara dengan keragaman adat dan budayanya 
              berhasil mempesona dan menarik kita untuk mengapresiasi serta mempelajarinya. 
            </p>
          </CardContent>
        </Card>
    </div>

    <div className='mx-36 flex flex-row justify-end'>
      <Card className='mx-10 flex items-end rounded-2xl bg-krem w-4/5 shadow-xl'>
        <CardContent className='flex flex-col justify-end items-end ml-auto'>
          <p className='items-end ml-auto text-right'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ab excepturi, sequi animi assumenda nisi asperiores sed iure dolorem, sit, voluptatem quisquam optio pariatur molestias. Aspernatur reprehenderit saepe illo culpa.</p>
        </CardContent>
        <img src={gambarMangongkalHoli} className='ml-auto h-64 rounded-tr-2xl rounded-br-2xl'/>
      </Card>
    </div>
      

    
    </>
  )
}
