import "../App.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

let listGifts = ["sock", "ball", "Candy"];

export default function Gifts() {
  return (
    <div className="item-list">
      <ul>
        {listGifts.map((item) => (
          <li style={{margin:"10px",display:"flex" ,}}>
            <Player
              autoplay
             loop
              src="https://assets7.lottiefiles.com/packages/lf20_axuatsoc.json"
              style={{ height: "50px", width: "50px" }}
            >
                <Controls visible={false}  />
            </Player>
           
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
