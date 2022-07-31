import { SubscriptionCardComponent } from "./subscription-card.component"
import { StarterContenu, StarterDescription } from "./subscription-card/starter-card"
import { ProBrandingContenu, ProBrandingDescription } from "./subscription-card/pro-branding-card"
import { PackNumeriqueContenu, PackNumeriqueDescription  } from "./subscription-card/pack-numerique-card"
import { PrintContenu, PrintDescription } from "./subscription-card/print-card"

export const SubscriptionComponent = () => {
    return (
    <>
        {SubscriptionCardComponent(StarterDescription, StarterContenu, 'Le starter', 500, 'purple', 'white')}
        {SubscriptionCardComponent(ProBrandingDescription, ProBrandingContenu, 'Le pro branding', 1000, 'white', 'black')}
        {SubscriptionCardComponent(PackNumeriqueDescription, PackNumeriqueContenu, 'Le pack numerique', 250, 'purple', 'white')}
        {SubscriptionCardComponent(PrintDescription, PrintContenu, 'Le pack print', 400, 'white', 'black')}
    </>
    )
}
