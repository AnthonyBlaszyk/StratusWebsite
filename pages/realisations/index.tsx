import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Realisations.module.css'
import Nav from 'react-bootstrap/Nav';

export default function Realisations() {
  return (
		<div className={styles.main}>
			<div className={styles.navBar}>
				<Nav className="justify-content-end navBar" activeKey="/home">
					<Nav.Item>
						<Nav.Link href="/realisations">{"Réalisation"}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/">{"L'équipe"}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/">{"Tarifs/packs/Abonnement"}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/">{"FAQ"}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/">{"Contacts"}</Nav.Link>
					</Nav.Item>
				</Nav>
			</div>

			<div className={styles.container}>

				<div className={styles.box1}>
					<div className={styles.img1}></div>
					<div className={styles.img2}></div>
					<div className={styles.img3}></div>
				</div>

				<div className={styles.box2}>
					<div className={styles.img4}></div>
				</div>

				<div className={styles.box3}>
					<div className={styles.img5}></div>
					<div className={styles.img6}></div>
				</div>
			</div>
		</div>
  );
}
