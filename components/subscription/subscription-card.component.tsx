import React from "react";

const SubscriptionCardComponent = (
  descriptionText: JSX.Element,
  contenuText: JSX.Element,
  cardTitle: string,
  price: number,
  background: string,
  textColor: string,
  imageUrl: string
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
      <div className={`bg-${background} flex subscribtion-card ${textColor}`}>

        {background === "white" ? (
          <div className="img-subscription-card">
            <img src={`/assets/${imageUrl}`} />
          </div>
        ) : null}

        <div className="cardContent ">
          <div className="cardHeader flex">
            <h2 className="subscribtion-card-title">{cardTitle}</h2>
            <button className={textColor} onClick={() => setCardContent("Description")}>
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
            <button className={textColor} onClick={() => setCardContent("Contenu")}>
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
          <div className={`footer-card-button-group flex ${textColor}`}>
            <p>
              {price} euros <span className="ttc">TTC</span>
            </p>
            <button className={`footer-card-button ${textColor}  border-${textColor}`}>Je veux ce pack</button>
          </div>
        </div>

        {background === "blue" ? (
          imageUrl === "Arcadia.png" ?
          (<div className={`img-subscription-card without-shadow`}>
            <img src={`/assets/${imageUrl}`} />
          </div>) :
          (<div className={`img-subscription-card`}>
          <img src={`/assets/${imageUrl}`} />
        </div>) 
        ) : null}

      </div>
    </>
  );
};

export default SubscriptionCardComponent