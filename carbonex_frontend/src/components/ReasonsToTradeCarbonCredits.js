const ReasonsToTradeCarbonCredits = () => {
    const styles = {
      section: {
        padding: '4rem 5%',

      },
      title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '1rem',
      },
      subtitle: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#213D30',
        textTransform: 'uppercase',
        marginBottom: '2rem',
      },
      paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#555',
        marginBottom: '2rem',
      },
      item: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '2rem',
      },
      itemAccent: {
        color: '#213D30',
        fontWeight: '700',
        fontSize: '1.2rem',
        flex: '0 0 200px',
      },
      itemContent: {
        flex: 1,
        fontSize: '1rem',
        lineHeight: '1.8',
        color: '#555',
      },
    };
  
    return (
      <section style={styles.section}>
        <h3 style={styles.subtitle}>Pourquoi échanger des crédits carbone?</h3>
        <h1 style={styles.title}>
          Les avantages du trading de crédits carbone
        </h1>
        <p style={styles.paragraph}>
          Le trading de crédits carbone est une solution clé pour lutter contre
          le changement climatique. Cela offre des opportunités pour réduire les
          émissions, stimuler l'innovation et participer à un marché en pleine
          croissance. Découvrez les principales raisons ci-dessous :
        </p>
        <div style={styles.item}>
          <div style={styles.itemAccent}>Réduction des émissions</div>
          <div style={styles.itemContent}>
            Contribuez à réduire les émissions globales en participant à un
            système qui favorise l'investissement dans les technologies propres
            et durables.
          </div>
        </div>
        <div style={styles.item}>
          <div style={styles.itemAccent}>Innovation et croissance</div>
          <div style={styles.itemContent}>
            Encouragez l'innovation dans les énergies renouvelables et les
            solutions durables tout en stimulant une croissance économique
            respectueuse de l'environnement.
          </div>
        </div>
        <div style={styles.item}>
          <div style={styles.itemAccent}>Impact positif</div>
          <div style={styles.itemContent}>
            Soutenez les projets qui ont un impact positif sur l'environnement et
            les communautés locales, comme la reforestation et l'efficacité
            énergétique.
          </div>
        </div>
        <div style={styles.item}>
          <div style={styles.itemAccent}>Conformité réglementaire</div>
          <div style={styles.itemContent}>
            Répondez aux exigences légales et réglementaires tout en réduisant
            votre empreinte carbone de manière efficace et traçable.
          </div>
        </div>
      </section>
    );
  };
  
  export default ReasonsToTradeCarbonCredits;
  