import { useEffect, useState } from "react"
import pixel from "../../assets/pixel.jpg"
import { getData } from "../../Api/Api"

const HomeScreen = () => {

const [data, setData] = useState<Array<any>>([])
const [state, setState] = useState<Array<any>>([])
const [view, setView]= useState<number>(12)
const [page, setPage] = useState<number>(2)


const lastPage = view * page
const firstPage = lastPage - view
const myState = data.slice(firstPage, lastPage)

let pagination: number[] = []
for (let i = 1; i<=Math.ceil((data.length /view)); i++) {
  pagination.push(i)
}


useEffect(()=> {
  getData().then((res: any) => {
    setData([...data, ...res])
    setState([...state, ...myState])
  })
}, [firstPage, lastPage, page])
console.log(state)

const handleScroll = ()=> {
  if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
    console.log("i can change")
    setPage(el => el + 1)
  }
}

useEffect (()=> {
  window.addEventListener('scroll', handleScroll)
}, [])

  return (
    <div className='font-main text-[15px]'>
      <div className='w-full p-4 flex flex-wrap'>
   {
    state?.map((props:any) => (
      <div className='w-[150px] min-h-[200px] border-2
      border-[#eca2ec]  rounded-t-md shadow-inner overflow-visible m-2
      '
      style= {{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      }}
      >
        <img
          src={pixel}
          className='w-full h-[150px] object-cover'
        ></img>
        <div className='mt-4 pl-2 text-[14px]'>
      <p>ID: {props.id}</p>
      <p>Name: </p>
        </div>
  
      </div>
    ))
   }
      </div>

      

    </div>
  )
}

export default HomeScreen