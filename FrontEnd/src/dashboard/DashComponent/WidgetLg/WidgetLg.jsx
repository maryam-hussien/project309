import React from 'react'
import './WidgetLg.css'
import profileImg from '../../../assets/profile/profile.jpg';


function WidgetLg() {

  const Button = ({Name , onClick}) => {
    return (
      <button className={"b " + Name } onClick={onClick}>{Name}</button>
    )
  };

  
  return (
    <div className='WidgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Statuse</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={profileImg} alt="" className="widgetLgImg" />
            <span className="widgetLName">Maryuma</span>
          </td>
          <td className="widgetLDate">3 Desember 2023</td>
          <td className="widgetLAmount">$ 122.00</td>
          <td className="widgetLStatus">
          <Button Name="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={profileImg} alt="" className="widgetLgImg" />
            <span className="widgetLName">Maryuma</span>
          </td>
          <td className="widgetLDate">3 Desember 2023</td>
          <td className="widgetLAmount">$ 122.00</td>
          <td className="widgetLStatus">
          <Button Name="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={profileImg} alt="" className="widgetLgImg" />
            <span className="widgetLName">Maryuma</span>
          </td>
          <td className="widgetLDate">3 Desember 2023</td>
          <td className="widgetLAmount">$ 122.00</td>
          <td className="widgetLStatus">
          <Button Name="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={profileImg} alt="" className="widgetLgImg" />
            <span className="widgetLName">Maryuma</span>
          </td>
          <td className="widgetLDate">3 Desember 2023</td>
          <td className="widgetLAmount">$ 122.00</td>
          <td className="widgetLStatus">
          <Button Name="Approved"  />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg