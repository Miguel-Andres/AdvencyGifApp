
    let gifts =["Sock","Glasess","Ball "]

export default function Gifts() {

    return (
        <div>
            <ul className="Icon-list">
            {gifts.map((item,i)=> <li  key={i}>{item} </li>) }
            </ul>
        </div>
    )
}
