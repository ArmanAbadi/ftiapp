
import BotTabLeft from '../BotTabLeft.png';
import BotTabRight from '../BotTabRight.png';
import BotTabCenter from '../BotTabCenter.png';
import Arrow from '../Arrow.png';

function BotTab(props){
        return <div style={props.styles} id={props.id} className="BotBar">
        <img style={{height:"200px"}}src={BotTabLeft}></img>
        <img style={{width:props.text.length*15+625, height:"200px"}} src={BotTabCenter}></img>
        <img style={{height:"200px"}}src={BotTabRight}></img>
        <div style={{position:"absolute", width:"35%", top:"30%", left:"200px", textAlign:"left", fontSize:"36px", fontWeight:"600"}}>
            {props.text}
            <button style={{position:"absolute",justifyContent:"center",textAlign:"left", width:"275px", height:"100px", marginLeft:"64px", borderRadius:"25px", backgroundColor:"white", fontSize:"25px", left:"350px", top:"0%", paddingLeft: "25px"}} onClick={props.customClickEvent}>
              Press Releases
              <img src={Arrow} style={{position:"absolute", marginLeft:"10px", width:"40px", top:"25%"}}></img>
            </button>
        </div>
      </div>
}

export default BotTab;