import BotTabRight from '../SmallBotRightTab.png';
import BotTabCenter from '../BotTabCenter.png';
import Arrow from '../Arrow.png';

function BotTabShortest(props){
        return <div style={props.styles} id={props.id} className="BotBarShortest">
        <img className="BottomBar" style={{height:"160px"}} src={BotTabCenter}></img>
        <img style={{height:"160px"}}src={BotTabRight}></img>
        <div className="BottomBarText" style={{position:"absolute", top:"20%", textAlign:"left", fontWeight:"600"}}>
            {props.text}<br/><br/>
            <button className="BottomBarButton" style={{position:"relative",justifyContent:"center",textAlign:"left", height:"40px", borderRadius:"25px", backgroundColor:"white", top:"0%", paddingLeft: "25px"}} onClick={props.customClickEvent}>
              Press Releases
              <img className="Arrow" src={Arrow}></img>
            </button>
        </div>
      </div>
}

export default BotTabShortest;