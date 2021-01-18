import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import loadingIcon from "../../assets/images/three_dots_loading.svg";
import axiosInstance from "../../service/axios";
import styles from './DealTracker.module.scss'

const DealStatus = (props) => {
  const [dataFetched, setDataFetched] = useState(false);
  const [partnersData, setPartnersData] = useState(null)
  let { partnerCode } = useParams();
  const copyCode = () => {
      let partnerCodeEl=document.getElementsByClassName("partnerCode")[0]
      const el = document.createElement('textarea');
      el.value = partnerCodeEl.innerText;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
  }

  useEffect(() => {
    if (!dataFetched) {
      axiosInstance.get(`/partners/get-status/${partnerCode}`).then(res => {
        return res.data
      }).then(
        data => {
          if(data.success===true) {
            setPartnersData(data.data)
            setDataFetched(true)
          }
          else window.alert('Could not fetch data')
        } 
      ).catch( err => {
        console.log(err)
        window.alert('Could not fetch data')
      })
    }
  }, [dataFetched, partnerCode]);

  return (
    <div className="container" style={{minHeight: 500}}>
      {dataFetched ? (
        <div>
            <div className={styles.personalDetails}>
              <h2>Hello, {partnersData.name}</h2>
              <p>Keep track of your own going deals. For more queries and payments, <Link to="/contact">{` Contact `}</Link> our team.</p>
              Partner Code: <button onClick = {() => copyCode()}><span className='partnerCode'>{partnersData.partnerCode}</span> <i className='eos-icons'>content_copy</i></button>
            </div>
            <table cellSpacing="0" cellPadding="0">
              <thead>
                <tr>
                  <th>Restaurant Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  partnersData.status.map((restro, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          {restro.name}
                        </td>
                        <td className={restro.confirmed?`${styles.confirmedStatus}`:`${styles.inProgressStatus}`}>
                          {restro.confirmed? (<span ><i className="eos-icons">check_circle_outline</i> Confirmed </span>):(<span><i className="eos-icons">access_time</i> In Progress </span>)}
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>

            </table>
        </div>
      ) : (
        <div className="loading-div">
          <h2>Fetching data...</h2>

          <img alt="" className="loading-icon" src={loadingIcon} />
        </div>
      )}
    </div>
  );
};

export default DealStatus;
