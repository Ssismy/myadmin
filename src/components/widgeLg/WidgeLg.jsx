import "./widgeLg.css"

const WidgeLg = () => {

    const Button=({type})=>{
return<button className={"widgeLgButton "+type}>{type}</button>
    }
  return (
    <div className="widgeLg">
        <h3 className="widgeLgTitle">Latest Transactions</h3>
        <table className="widgeLgTable">
            <tr className="widgeLgTr">
                <th className="widgeLgTh">Customer</th>
                <th className="widgeLgTh">Date</th>
                <th className="widgeLgTh">Amount</th>
                <th className="widgeLgTh">Status</th>
            </tr>
            <tr className="widgeLgTr">
                <td className="widgeLgTdUser">
                    <img className="widgeLgImage" src="https://i.ibb.co/VJKsQhP/taylor-8-Vt2haq8-NSQ-unsplash.jpg" alt="" />
                    <span className="widgeLgName">Susan Carol</span>
                </td>
                <td className="widgeLgDate">2 Jun 2021</td>
                <td className="widgeLgAmount">$122.00</td>
                <td className="widgeLgStatus">
                    <Button type="Approved" />
                </td>
            </tr>
            <tr className="widgeLgTr">
                <td className="widgeLgTdUser">
                    <img className="widgeLgImage" src="https://i.ibb.co/VJKsQhP/taylor-8-Vt2haq8-NSQ-unsplash.jpg" alt="" />
                    <span className="widgeLgName">Susan Carol</span>
                </td>
                <td className="widgeLgDate">2 Jun 2021</td>
                <td className="widgeLgAmount">$122.00</td>
                <td className="widgeLgStatus">
                    <Button type="Declined" />
                </td>
            </tr>
            <tr className="widgeLgTr">
                <td className="widgeLgTdUser">
                    <img className="widgeLgImage" src="https://i.ibb.co/VJKsQhP/taylor-8-Vt2haq8-NSQ-unsplash.jpg" alt="" />
                    <span className="widgeLgName">Susan Carol</span>
                </td>
                <td className="widgeLgDate">2 Jun 2021</td>
                <td className="widgeLgAmount">$122.00</td>
                <td className="widgeLgStatus">
                    <Button type="Pending" />
                </td>
            </tr>
            <tr className="widgeLgTr">
                <td className="widgeLgTdUser">
                    <img className="widgeLgImage" src="https://i.ibb.co/VJKsQhP/taylor-8-Vt2haq8-NSQ-unsplash.jpg" alt="" />
                    <span className="widgeLgName">Susan Carol</span>
                </td>
                <td className="widgeLgDate">2 Jun 2021</td>
                <td className="widgeLgAmount">$122.00</td>
                <td className="widgeLgStatus">
                    <Button type="Approved" />
                </td>
            </tr>
        </table>
    </div>
  )
}

export default WidgeLg