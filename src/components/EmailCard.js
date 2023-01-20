import React from "react";

function EmailCard({
  cardData,
  setCurrentEmailData,
  currentEmailData,
  showEmail,
  setShowEmail,
  favs,
  read,
  setRead,
}) {
  let emailDate = new Date(cardData?.date);
  let isFav = favs.includes(cardData?.id);
  let isRead = read.includes(cardData?.id);
  return (
    <div>
      <div
        style={{
          margin: "1em",
          border: "2px solid",
          padding: 10,
          width: showEmail ? "35vw" : "95vw",
          cursor: "pointer",
          borderColor:
            cardData?.id == currentEmailData?.id ? "#E54065" : "gray",
          borderRadius: "0.5em",
          backgroundColor: isRead ? "lightgray" : "",
        }}
        onClick={() => {
          setShowEmail(true);
          setCurrentEmailData(cardData);
          setRead([...read, cardData?.id]);
        }}
      >
        <p>
          From: {cardData?.from?.name} {cardData?.from?.email}
        </p>
        <p>Subject: {cardData?.subject}</p>
        <p>{cardData?.short_description}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p style={{ margin: 0 }}>
            {emailDate.toLocaleTimeString([], {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          {isFav && (
            <button
              style={{ backgroundColor: "#E54065", color: "#fff" }}
              disabled
            >
              Favourite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailCard;
