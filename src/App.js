import logo from "./logo.svg";
import "./App.css";
import EmailList from "./screens/EmailList";
import EmailDetail from "./screens/EmailDetail";
import { useState } from "react";

function App() {
  const [showEmail, setShowEmail] = useState(false);
  const [currentEmailData, setCurrentEmailData] = useState(null);
  const filters = [
    { key: "Unread", id: 0 },
    { key: "Read", id: 1 },
    { key: "Favourites", id: 2 },
  ];
  const [appliedFilter, setAppliedFilter] = useState(null);
  const [favs, setFavs] = useState([]);
  const [read, setRead] = useState([]);

  return (
    <div className="body-bg" style={{ height: "100vh" }}>
      <div
        className="body-bg"
        style={{
          position: "fixed",
          width: "100%",
          height: "4em",
          top: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <div style={{ marginLeft: "1em" }} className="body-bg">
          Filter by:
          {filters?.map((item, index) => {
            return (
              <button
                className="filter-btn"
                style={{
                  marginLeft: "0.5em",
                  backgroundColor:
                    appliedFilter?.id == item?.id ? "#636363" : "",
                  color: appliedFilter?.id == item?.id ? "white" : "",
                }}
                key={item?.id}
                onClick={() => {
                  setAppliedFilter(item);
                }}
              >
                {item?.key}
              </button>
            );
          })}
          <button
            className="filter-btn"
            style={{
              marginLeft: "0.5em",
            }}
            onClick={() => {
              setAppliedFilter(null);
            }}
          >
            Clear Filter
          </button>
        </div>
      </div>
      <div
        className="body-bg"
        style={{ display: "flex", flexDirection: "row", marginTop: "3em" }}
      >
        <div>
          <EmailList
            setCurrentEmailData={setCurrentEmailData}
            currentEmailData={currentEmailData}
            showEmail={showEmail}
            setShowEmail={setShowEmail}
            favs={favs}
            read={read}
            setRead={setRead}
            appliedFilter={appliedFilter}
          />
        </div>
        {showEmail && (
          <div
            style={{
              position: "fixed",
              left: "45vw",
              top: "7vh",
              border: "2px solid gray",
              borderRadius: "0.5em",
              height: "90vh",
              width: "52vw",
              padding: 2,
            }}
          >
            <EmailDetail
              currentEmailData={currentEmailData}
              showEmail={showEmail}
              setShowEmail={setShowEmail}
              setFavs={setFavs}
              favs={favs}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
