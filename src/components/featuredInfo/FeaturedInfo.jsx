import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';

const FeaturedInfo = () => {
  return (
    <div className="feature">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,454</span>
                <span className="featuredMoneyRate">-11.4</span>
                <ArrowDownward className="featuredIcon negative" />
            </div>
            <span className="featuredText">Compared To Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,464</span>
                <span className="featuredMoneyRate">-1.4</span>
                <ArrowDownward className="featuredIcon negative" />
            </div>
            <span className="featuredText">Compared To Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,019</span>
                <span className="featuredMoneyRate">+2.5</span>
                <ArrowUpward className="featuredIcon" />
            </div>
            <span className="featuredText">Compared To Last Month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo