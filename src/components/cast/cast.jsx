import './cast.css'
function Cast(casts) {
    const { pics, names, MovieNames } = casts;
    return (
        <>
            <div className="castoverall">
                <img src={pics} alt="hero" className='castpics' />
                <h5>{names}</h5>
                <h5>{MovieNames}</h5>
            </div>
        </>
    )
}
export default Cast;