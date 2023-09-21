export default function Place(props){
    const { placeName, date, coverImg, country, googleMaps, description } = props;
    console.log(date.from)
    const dateString = `${date.from.day} ${date.from.monthShort}, ${date.from.year} - ${date.to.day} ${date.to.monthShort}, ${date.to.year}`
    return(
        <div className="p-3 flex space-x-10 items-center">
            <div className="w-1/2">
                <img className="min-w-[10rem] rounded-sm" src={coverImg} alt={placeName} />
            </div>
            

            <div className="w-1/2">
                <div className="w-full flex flex-wrap items-center">
                    <p className="font-extrabold text-2xl mr-auto">{country}</p>
                    <a className="underline text-gray-400 opacity-50 text-sm" target="_blank" rel="noreferrer" href={googleMaps}>View on Google Maps</a>
                </div>
                <div>
                    <h1>{placeName}</h1>    
                    <span>{dateString}</span>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    )

}