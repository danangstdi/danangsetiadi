export default function ServiceCard(props) {
  return (
    <div className="card h-80 overflow-hidden rounded-3xl cursor-default">
       <div className={`card2 bg-gradient-to-br ${props.main ? 'from-emerald-400 to-emerald-600' : 'from-zinc-700 to-zinc-900'} h-full p-3 flex flex-col justify-center items-center gap-3 hover:rounded-3xl`}>
         <div className="bg-white rounded-full p-3 w-fit">
           {props.icon}
         </div>
         <h3 className="text-xl text-white mt-1">{props.label}</h3>
        <p className="text-sm text-gray-200">{props.text}</p>
       </div>
     </div>
  )
}
