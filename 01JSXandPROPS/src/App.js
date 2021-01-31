import React from "react";
import Potato from "./Potato";
import Proptypes from "prop-types";

function Food({fav}) {
  console.log({fav});
  console.log({fav}.fav);
  return <h1> i love {fav} </h1>
}

function Characters({name, picture, rating}) {
  return <div>
            <h1>{name}</h1>
            <h4>{rating / 5}</h4>
            <img src={picture} alt={name} />
          </div>
}

function Characters2({Char}) {
  return <div>
            <h1>{Char.name}</h1>
            <img src={Char.img} alt={Char.name} />
          </div>
}

const foodLike = [{
    id : 1,
    name : '성녀의이야기',
    img : "https://avatar.maplestory.nexon.com/Character/180/FJOOGAFNKOKPJAKKMPKLNLJLGGANIFIOCKFEPIJMIKHIBKFKPBIDABEGEAHGPKKJKEMBEFKPLIFIJJIHLGJJOEJJNAPCCLAMKICEJBHABMEEPGFGOIODMBFIOFFHLCCKDJIAIOOGMGCIELKDINGJLLCJJJAFCALNOPHENIEMIBDODDDPPHMAIFHOJEFMHMNACLACMIHHMCDDIKCLGDJOMHBEONAFIDNICIKJDLJDPGMJNJDAKFEPDDGHPKDAMOKB.png",
    ratings : 5.0
  }, {
    id : 2,
    name : "해동카이져",
    img : "https://avatar.maplestory.nexon.com/Character/180/NMGLDNMLEJPBONCNIIBDMOJODEFHAIFKLAJLAPLGGGNNJBJGPLKEDMKEKOEBELOMLAFFLDAADIMJCDJMCOAFLFHNHFECCDBJCPFFPCEHFBGMLPMCAOFBFOHDBNLDKPNGNGFNBJOPMGOIMPHCDEBLCEDFLKDPKJIIFKMDBEBDHIGGFPNGCICFOJJCANIMGGDEAIOLPPGNMGNEKJPMCLKENAFGJKJLCDAJBJHLBLAPOCICAJCKEAANJAKNJPNEKEIG.png",
    ratings : 4.9
  }
];

Food.propTypes = {
  name : Proptypes.string.isRequired,
  picture : Proptypes.string.isRequired,
  rating : Proptypes.number
};

function App() {
  return (
    <div className="App">
      <div className="test">aaa</div>
      <Potato />
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />

      {foodLike.map(dish => <Characters key={dish.id} name={dish.name} picture={dish.img} ratings={dish.ratings} />)}

      {foodLike.map(dish => <Characters2 key={dish.id} Char={dish}/>)}
    </div>
  );
}

export default App;
