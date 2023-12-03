import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import WidgeLg from "../../components/widgeLg/WidgeLg"
import WidgeSm from "../../components/widgeSm/WidgeSm"
import "./home.css";
import {userData} from "../../dummyData"


const Home = () => {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data={userData} grid dataKey="ActiveUser" title="User Analytics" />
        <div className="widge">
        <WidgeSm />
        <WidgeLg />
        </div>
        
    </div>
  )
}

export default Home