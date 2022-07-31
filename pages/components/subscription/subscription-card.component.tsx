import React from "react";

export const SubscriptionCardComponent = (
  descriptionText: JSX.Element,
  contenuText: JSX.Element,
  cardTitle: string,
  price: number,
  background: string,
  textColor: string
) => {
  const [cardContent, setCardContent] = React.useState("Description");

  function getStarterText(): JSX.Element {
    if (cardContent === "Description") {
      return descriptionText;
    } else {
      return contenuText;
    }
  }

  return (
    <>
      <div className={`bg-${background} flex subscribtion-card`}>
        {background === "white" ? (
          <div className="img-subscription-card">
            <img src="/assets/img01.webp" />
          </div>
        ) : null}

        <div className="cardContent ">
          <div className="cardHeader flex">
            <h2 className="subscribtion-card-title">{cardTitle}</h2>
            <button onClick={() => setCardContent("Description")}>
              {cardContent === "Description" ? (
                <>
                  <p>Description</p>
                  <span className={`underlineSpan bg-${textColor}`}></span>
                </>
              ) : (
                <>
                  <p>Description</p>
                  <span className="underlineSpanNone"></span>
                </>
              )}
            </button>
            <button onClick={() => setCardContent("Contenu")}>
              {cardContent === "Contenu" ? (
                <>
                  <p>Contenu</p>
                  <span className={`underlineSpan bg-${textColor}`}></span>
                </>
              ) : (
                <>
                  <p>Contenu</p>
                  <span className="underlineSpanNone"></span>
                </>
              )}
            </button>
          </div>

          <div className="cardText">{getStarterText()}</div>
          <span className={`underlineSpan bg-${textColor}`}></span>
          <div className="footer-card-button-group flex">
            <button className="footer-card-button">
              {price} euros <span className="ttc">TTC</span>
            </button>
            <button className="footer-card-button">Je veux ce pack</button>
          </div>
        </div>
        {background === "purple" ? (
          <div className="img-subscription-card">
            <img src="/assets/img01.webp" />
          </div>
        ) : null}
      </div>
    </>
  );
};
