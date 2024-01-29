// Constants, Helpers & Types
import { UserData } from "utils/types";

const DisplayUserInfo = ({ userData }: { userData: UserData }) => {
  const { personalInformation, citiesTraveled } = userData;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <span className="text-muted">{"{"}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 offset-sm-1">
          <span className="text-muted">{`"personalInformation": {`}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-8 offset-sm-2">
          <span className="text-muted">&quot;firstName&quot;: </span>
          <span className="text-success">{`"${personalInformation.firstName}",`}</span>
          <br />
          <span className="text-muted">&quot;lastName&quot;: </span>
          <span className="text-success">{`"${personalInformation.lastName}",`}</span>
          <br />
          <span className="text-muted">&quot;dateOfBirth&quot;: </span>
          <span className="text-success">{`"${personalInformation.dateOfBirth}",`}</span>
        </div>
      </div>
      <div className="row">
        <div className="col offset-sm-1">
          <span className="text-muted">{"}"}</span>,
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 offset-sm-1">
          <span className="text-muted">{`"citiesTraveled": [`}</span>
        </div>
      </div>
      {citiesTraveled.map((city, index) => (
        <div className="row" key={index}>
          <div className="col-12 col-sm-8 offset-sm-2">
            <div className="row">
              <div className="col-12">
                <span className="text-muted">{"{"}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-9 offset-sm-1">
                <span className="text-muted">&quot;cityName&quot;: </span>
                <span className="text-success">{`"${city.cityName}",`}</span>
                <br />
                <span className="text-muted">&quot;dateArrived&quot;: </span>
                <span className="text-success">{`"${city.dateArrived}",`}</span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="text-muted">{"}"}</span>,
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="row">
        <div className="col offset-sm-1">
          <span className="text-muted">{"]"}</span>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span className="text-muted">{"}"}</span>
        </div>
      </div>
    </div>
  );
};

export default DisplayUserInfo;
