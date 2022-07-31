import { SubscriptionCardComponent } from "./subscription-card.component"
import { starterContenu, starterDescription } from "./subscription-card/starter-card"
import { proBrandingContenu, proBrandingDescription } from "./subscription-card/pro-branding-card"
import { packNumeriqueContenu, packNumeriqueDescription  } from "./subscription-card/pack-numerique-card"
import { printContenu, printDescription } from "./subscription-card/print-card"

export const SubscriptionComponent = () => {
    return (
    <>
        {SubscriptionCardComponent(starterDescription, starterContenu, 'Le starter', 500, 'purple', 'white')}
        {SubscriptionCardComponent(proBrandingDescription, proBrandingContenu, 'Le pro branding', 1000, 'white', 'black')}
        {SubscriptionCardComponent(packNumeriqueDescription, packNumeriqueContenu, 'Le pack numerique', 250, 'purple', 'white')}
        {SubscriptionCardComponent(printDescription, printContenu, 'Le pack print', 400, 'white', 'black')}
    </>
    )
}
