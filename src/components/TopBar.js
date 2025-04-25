
import EmptyTabLeft from '../EmptyTabLeft.png';
import EmptyTabRight from '../EmptyTabRight.png';
import EmptyTabCenter from '../EmptyTabCenter.png';

function TopBar(props){
        return <div style={props.styles} onClick={props.customClickEvent} id={props.id} className="TopBarItem">
        <img src={EmptyTabLeft}></img>
        <img style={{width:props.text.length*5, height:"89px"}} src={EmptyTabCenter}></img>
        <img src={EmptyTabRight}></img>
        <div style={{position:"absolute", width:"100%", top:"50%", textAlign:"center"}}>
            {props.text}
        </div>
      </div>
}

export default TopBar;