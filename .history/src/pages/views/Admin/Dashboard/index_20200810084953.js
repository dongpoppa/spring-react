import React,{useState} from "react";

const Dashboard = (props) => {
    [getGameTotal, setGameTotal] = useState(0);
  const gamesTotal = () => {
    props.games.map(game => setGameTotal(getGameTotal++))

  }
  return (
    <div>
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-12 d-flex no-block align-items-center">
            <h4 className="page-title">Dashboard</h4>
            <div className="ml-auto text-right">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Library
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" >
        <div style={{height:'600px'}}>
        <img src="https://steamuserimages-a.akamaihd.net/ugc/863991188861518358/9A93073372E9C4531BBBAEE2C2C1AEE246B7C9B9/" height="300px" width="auto"></img>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
