import React, { useState, useEffect } from 'react';
import './Main.css';

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk])
  }, [punkListData, selectedPunk])

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>

        
        <div className="punkDetails"
          style={{ color: "#fff"}}>
            <div className="title">
              {activePunk.name}
              <span className="itemNumber">•#{activePunk.token_id}</span>
            </div>
        </div>

        <div className="owner">
          <div className="ownerImageContainer">
            <img src={""} alt="" />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0xA455e4839822d1eC47495BEAEBb1EfDaceefC9dD</div>
              <div className="ownerHandle">@beny_eth</div>
            </div>
          </div>
        </div>
       

      </div>
    </div>
  )
}

export default Main;
