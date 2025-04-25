import TabBlank from '../TabBlank.png';

function TopBarUnselected(props){
        return <div style={props.styles} onClick={props.customClickEvent} id={props.id} className="TopBarItem">
        <img src={TabBlank}></img>
        <img style={{width:props.text.length*5, height:"89px"}} src={TabBlank}></img>
        <img src={TabBlank}></img>
        <div style={{position:"absolute", width:"100%", top:"50%", textAlign:"center"}}>
            {props.text}
        </div>
      </div>
}

export default TopBarUnselected;