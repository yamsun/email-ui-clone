import React, { useState, useEffect } from "react";
import Avatar from "../components/Avatar";
import EmailCard from "../components/EmailCard";

function EmailDetail({
  currentEmailData,
  showEmail,
  setShowEmail,
  favs,
  setFavs,
}) {
  const [emailBodyData, setEmailBodyData] = useState(null);

  function fetchEmailBody() {
    fetch(`https://flipkart-email-mock.now.sh/?id=${currentEmailData?.id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log("email body", json);
        setEmailBodyData(json?.body);
      });
  }
  useEffect(() => {
    if (currentEmailData) {
      fetchEmailBody();
    }
  }, [currentEmailData]);

  let isFav = favs.includes(currentEmailData?.id);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 0,
        }}
      >
        <div
          style={{
            margin: "1em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar name={currentEmailData?.from?.name} />
          <div style={{ marginLeft: "1em" }}>
            <h3>{currentEmailData?.subject}</h3>
            <p>
              {new Date(currentEmailData?.date).toLocaleTimeString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        </div>
        <button
          style={{
            margin: "1em",
            backgroundColor: "#E54065",
            borderRadius: "1em",
            padding: "0.5em",
            cursor: "pointer",
            color: "#fff",
          }}
          onClick={() => {
            if (isFav) {
              setFavs(favs.filter((i) => i !== currentEmailData?.id));
            } else {
              setFavs((a) => [...a, currentEmailData?.id]);
            }
          }}
          className="fav-btn"
        >
          {!isFav ? "Mark as favourite" : " Remove from favourites"}
        </button>
      </div>

      <div
        style={{
          overflow: "auto",
          height: "65vh",
          padding: "1em",
        }}
        dangerouslySetInnerHTML={{ __html: emailBodyData }}
      />
    </div>
  );
}

export default EmailDetail;
