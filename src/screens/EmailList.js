import React from "react";
import { useState, useEffect } from "react";
import EmailCard from "../components/EmailCard";

function EmailList({
  setCurrentEmailData,
  currentEmailData,
  showEmail,
  setShowEmail,
  favs,
  read,
  setRead,
  appliedFilter,
}) {
  const [emailList, setEmailList] = useState([]);
  const [loading, setLoading] = useState(false);
  function fetchEmailList() {
    setLoading(true);
    fetch("https://flipkart-email-mock.now.sh/")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setEmailList(json?.list);
      });
  }
  useEffect(() => {
    fetchEmailList();
  }, []);
  let filteredEmailList = emailList;

  if (appliedFilter?.id === 2) {
    filteredEmailList = emailList.filter((i) => favs?.includes(i?.id));
  } else if (appliedFilter?.id === 1) {
    filteredEmailList = emailList.filter((i) => read?.includes(i?.id));
  } else if (appliedFilter?.id === 0) {
    filteredEmailList = emailList.filter((i) => !read?.includes(i?.id));
  }

  return (
    <>
      {!loading ? (
        filteredEmailList.map((i, index) => {
          return (
            <EmailCard
              key={i?.id}
              cardData={i}
              setCurrentEmailData={setCurrentEmailData}
              currentEmailData={currentEmailData}
              showEmail={showEmail}
              setShowEmail={setShowEmail}
              favs={favs}
              read={read}
              setRead={setRead}
            />
          );
        })
      ) : (
        <div style={{ margin: "2em" }}>Loading...</div>
      )}
    </>
  );
}

export default EmailList;
