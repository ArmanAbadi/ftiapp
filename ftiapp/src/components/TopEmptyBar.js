
import EmptyTabLeft from '../EmptyTabLeft.png';
import EmptyTabRight from '../EmptyTabRight.png';
import EmptyTabCenter from '../EmptyTabCenter.png';

function TopEmptyBar() {
  return<div >
          <img src={EmptyTabLeft}></img>
          <img src={EmptyTabCenter}></img>
          <img src={EmptyTabRight}></img>
        </div>
}

export default TopEmptyBar;