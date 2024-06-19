

function ImageGallery({image}) {
    return(
        <div className='flex'>
            <div className='img-column'>
                {Array.from({length:4}).map((_,index)=>(
                    <figure key={index} onClick={()=>{console.log(index)}}>
                        <img src={image} alt={`img-${index}` }/>
                    </figure>
                ))}
            </div>
            <div className='main-img'>
                <figure>
                    <img src={image} alt='main img'/>
                </figure>
            </div>
        </div>
    )
}

export default ImageGallery