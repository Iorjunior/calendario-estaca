export default function EventCard(props){
    return(
        <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
          <div className="flex flex-col w-full md:flex-row">
            <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-purple-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
              <div className="md:text-3xl">{props.mes}</div>
              <div className="md:text-6xl">{props.dia}</div>
              <div className="md:text-xl">{props.hora}</div>
            </div>

            <div className="p-4 font-normal text-gray-800 md:w-3/4">
              <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
                {props.evento}
              </h1>
              <p className="leading-normal">
                {props.descricao}
              </p>
              <div className="flex flex-row items-center mt-4 text-gray-700">
                <div className="w-1/2">Organização: {props.organizacao}</div>
              </div>
            </div>
          </div>
        </div>
    )
}