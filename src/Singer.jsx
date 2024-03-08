import './Singer.css'
export default function Singer(singer){
    console.log(singer.singer.name)
    return(
        <div className='card'>
            <h2>Singer : {singer.singer.name} </h2>
            <h2>Age : {singer.singer.age}</h2>
        </div>
    )
}