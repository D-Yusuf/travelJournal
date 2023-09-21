export default function Place(props){
    const { placeName, date, coverImg, country, googleMaps, description } = props;
    const dateString = `${date.from.day} ${date.from.monthShort}, ${date.from.year} - ${date.to.day} ${date.to.monthShort}, ${date.to.year}`
    return(
        <div className="pt-1 flex flex-wrap md:flex-nowrap space-x-10 space-y-10 md:space-y-0 items-center">
            <div className="md:w-1/2">
                <img className="md:max-h-none rounded-sm" src={coverImg} alt={placeName} />
            </div>
            

            <div className="md:w-1/2">
                <div className="w-full flex flex-wrap items-center">
                    <p className="font-extrabold text-4xl mr-auto">{country}</p>
                    <a className="underline text-gray-400 opacity-50 text-sm" target="_blank" rel="noreferrer" href={googleMaps}>View on Google Maps</a>
                </div>
                <div className="mt-5 space-y-2">
                    <h1 className="text-3xl">{placeName}</h1>    
                    <p className="text-sm">{dateString}</p>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    )

}