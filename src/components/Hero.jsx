function Hero(){
    return(
        <div className="h-[60vh]">
            <div className=" bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('src/assets/images/hero102.jpeg')] h-[90vh] bg-no-repeat bg-cover bg-center">
            <h1  className="text-center text-[4em] text-white">LIVE YOUR <br/> ADVENTURE</h1>
            <p className="text-center font-medium text-white text-[1.4em]" >Don't wait until tommorow,find a trip now and discover the world in a new way</p>
            </div>
        </div>
    )
}
export default Hero;