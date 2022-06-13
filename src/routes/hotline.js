import '../hotline.css';

function Hotline() {
    return (
        <div className='wrapper'>
            <div className='soup'>
                <h2 className='soupTitle'>
                    SOUP OF THE DAY
                </h2>
                <p>
                    Soup
                </p>
            </div>
            <div className='salad'>
                <h2 className='saladTitle'>
                    SALADS
                </h2>
            </div>
            <div className='special'>
                <h2 className='specialTitle'>
                    SPECIAL
                </h2>
            </div>
            <div className='dessert'>
                <h2 className='dessertTitle'>
                    DESSERTS
                </h2>
            </div>
        </div>
    );
}

export default Hotline;