import SubscriptionCardComponent from "./subscription-card.component";
import {
  starterContenu,
  starterDescription,
} from "./subscription-card/starter-card";
import {
  proBrandingContenu,
  proBrandingDescription,
} from "./subscription-card/pro-branding-card";
import {
  packNumeriqueContenu,
  packNumeriqueDescription,
} from "./subscription-card/pack-numerique-card";
import { printContenu, printDescription } from "./subscription-card/print-card";

const SubscriptionComponent = () => {
  return (
    <>
    <div className="subscriptionHeader">  
      <h1 className="subscriptionTitle">{`NOS PACKS & NOS TARIFS`}</h1>
      <h2 className="subscriptionSubtitle">
        Démarquez-vous avec une identité dynamique, universelle et intemporelle.
      </h2>
      <p className="subscriptionTextTitle">
        L’identité visuelle est essentielle pour le développement de votre
        activité, c’est elle qui assure une identité de marque solide. C’est
        pourquoi, nous vous proposons plusieurs options tarifaires et une
        solution à abonnements.
      </p>
    </div>
      {SubscriptionCardComponent(
        starterDescription,
        starterContenu,
        "Le starter",
        500,
        "blue",
        "white",
        "SenteurPlaisir.jpg"
      )}
      {SubscriptionCardComponent(
        proBrandingDescription,
        proBrandingContenu,
        "Le pro branding",
        1000,
        "white",
        "black",
        "BullUp.jpg"
      )}
      {SubscriptionCardComponent(
        packNumeriqueDescription,
        packNumeriqueContenu,
        "Le pack numerique",
        250,
        "blue",
        "white",
        "Arcadia.png"
      )}
      {SubscriptionCardComponent(
        printDescription,
        printContenu,
        "Le pack print",
        400,
        "white",
        "black",
        "ADManagement.jpg"
      )}
    </>
  );
};

export default SubscriptionComponent;
