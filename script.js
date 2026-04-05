/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f7f6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Cores */
:root {
    --primary-color: #2196F3;
    --secondary-color: #4CAF50;
    --accent-color: #FF9800;
    --white-color: #ffffff;
    --dark-color: #333333;
    --light-gray: #f0f0f0;
    --text-gray: #555555;
}

/* ===== HERO SECTION ===== */
.hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: var(--white-color);
    padding: 40px 0;
    text-align: center;
    position: static;
    z-index: 1;
}

.hero .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
}

.hero-content {
    max-width: 600px;
    text-align: center;
}

.hero h1 {
    font-size: 2.2em;
    margin-bottom: 20px;
    line-height: 1.3;
    font-weight: 700;
}

.hero .subtitle {
    font-size: 1.1em;
    margin-bottom: 25px;
    opacity: 0.95;
    line-height: 1.5;
}

.hero-image {
    width: 100%;
    max-width: 350px;
    margin-top: 20px;
}

.hero-image img {
    width: 100%;
    height: auto;
    display: block;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
}

/* ===== CTA BUTTONS ===== */
.cta-button {
    display: inline-block;
    background-color: var(--accent-color);
    color: var(--white-color);
    padding: 14px 28px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1em;
    transition: all 0.3s ease;
    box-shadow: 0 6px 15px rgba(255, 152, 0, 0.3);
    border: none;
    cursor: pointer;
    text-align: center;
}

.cta-button:hover {
    background-color: #e68a00;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 152, 0, 0.4);
}

.cta-button-large {
    padding: 16px 35px;
    font-size: 1.1em;
    display: block;
    margin: 25px auto 0;
    max-width: 400px;
}

/* ===== GENERAL SECTION STYLING ===== */
section {
    padding: 50px 0;
    text-align: center;
    position: static;
}

section:nth-of-type(even) {
    background-color: var(--light-gray);
}

h2 {
    font-size: 1.9em;
    color: var(--dark-color);
    margin-bottom: 30px;
    font-weight: 700;
    line-height: 1.3;
}

h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: var(--secondary-color);
    border-radius: 2px;
    margin: 15px auto 0;
}

/* ===== PAIN POINTS SECTION ===== */
.pain-points ul {
    list-style: none;
    max-width: 650px;
    margin: 0 auto;
    text-align: left;
}

.pain-points li {
    background-color: var(--white-color);
    padding: 18px 22px;
    margin-bottom: 12px;
    border-radius: 10px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
    font-size: 1.05em;
    color: var(--text-gray);
    border-left: 5px solid var(--accent-color);
    transition: transform 0.2s ease;
}

.pain-points li:hover {
    transform: translateX(5px);
}

/* ===== CONNECTION SECTION ===== */
.connection {
    background-color: var(--white-color);
}

.connection p {
    max-width: 700px;
    margin: 0 auto 20px auto;
    font-size: 1.05em;
    color: var(--text-gray);
    line-height: 1.7;
}

/* ===== PRODUCT PRESENTATION SECTION ===== */
.product-presentation p {
    max-width: 700px;
    margin: 0 auto 25px auto;
    font-size: 1.05em;
    color: var(--text-gray);
}

.product-presentation ul {
    list-style: none;
    max-width: 700px;
    margin: 0 auto;
    text-align: left;
}

.product-presentation li {
    background-color: var(--white-color);
    padding: 18px 22px;
    margin-bottom: 12px;
    border-left: 5px solid var(--primary-color);
    border-radius: 10px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
    font-size: 1.05em;
    color: var(--text-gray);
}

.product-presentation li strong {
    color: var(--primary-color);
    font-weight: 700;
}

/* ===== BENEFITS SECTION ===== */
.benefits ul {
    list-style: none;
    max-width: 700px;
    margin: 0 auto;
    text-align: left;
}

.benefits li {
    background-color: var(--white-color);
    padding: 18px 22px;
    margin-bottom: 12px;
    border-left: 5px solid var(--secondary-color);
    border-radius: 10px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
    font-size: 1.05em;
    color: var(--text-gray);
    display: flex;
    align-items: center;
}

.benefits li i {
    color: var(--secondary-color);
    margin-right: 12px;
    font-size: 1.3em;
    flex-shrink: 0;
}

/* ===== WHAT YOU WILL LEARN SECTION ===== */
.what-you-will-learn {
    background-color: var(--white-color);
}

.learning-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 25px;
    margin-top: 40px;
}

.learning-item {
    background-color: var(--light-gray);
    padding: 30px 25px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.learning-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.learning-item i {
    font-size: 2.8em;
    color: var(--primary-color);
    margin-bottom: 15px;
}

.learning-item h3 {
    font-size: 1.2em;
    color: var(--dark-color);
    margin-bottom: 10px;
    font-weight: 700;
}

.learning-item p {
    font-size: 0.95em;
    color: var(--text-gray);
    line-height: 1.5;
}

/* ===== OBJECTION HANDLING SECTION ===== */
.objection-handling {
    background-color: var(--light-gray);
}

.objection-handling .faq-item {
    background-color: var(--white-color);
    padding: 28px 25px;
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
}

.objection-handling .faq-item h3 {
    color: var(--primary-color);
    font-size: 1.2em;
    margin-bottom: 12px;
    font-weight: 700;
}

.objection-handling .faq-item p {
    color: var(--text-gray);
    font-size: 1em;
    line-height: 1.6;
}

/* ===== PROOF SECTION ===== */
.proof {
    background-color: var(--white-color);
}

.proof p {
    max-width: 700px;
    margin: 0 auto 20px auto;
    font-size: 1.05em;
    color: var(--text-gray);
    line-height: 1.7;
}

.proof ul {
    list-style: none;
    max-width: 700px;
    margin: 20px auto 0;
    text-align: left;
    padding-left: 0;
}

.proof li {
    margin-bottom: 12px;
    font-size: 1.05em;
    color: var(--text-gray);
    padding-left: 25px;
    position: relative;
    line-height: 1.6;
}

.proof li::before {
    content: '✓';
    color: var(--secondary-color);
    font-weight: bold;
    display: inline-block;
    position: absolute;
    left: 0;
    font-size: 1.2em;
}

/* ===== OFFER SECTION (COM PREÇO) ===== */
.offer {
    background: linear-gradient(135deg, var(--secondary-color) 0%, #388E3C 100%);
    color: var(--white-color);
    padding: 60px 0;
}

.offer h2 {
    color: var(--white-color);
}

.offer p {
    font-size: 1.1em;
    margin-bottom: 20px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}

.price-box {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 30px 25px;
    border-radius: 12px;
    margin: 30px auto;
    max-width: 600px;
    backdrop-filter: blur(10px);
}

.offer .price-highlight {
    font-size: 1.3em;
    font-weight: 700;
    color: var(--white-color);
    margin-bottom: 15px;
}

.offer .price {
    font-size: 3.2em;
    font-weight: 700;
    color: var(--accent-color);
    margin: 15px 0;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}

.offer .low-risk {
    font-size: 1.05em;
    margin-bottom: 15px;
    font-weight: 600;
}

.offer .urgency {
    font-size: 1em;
    margin-bottom: 0;
    opacity: 0.95;
    font-style: italic;
}

/* ===== GUARANTEE SECTION ===== */
.guarantee {
    background-color: var(--white-color);
    padding: 60px 0;
}

.guarantee .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 700px;
}

.guarantee h2 {
    margin-bottom: 20px;
}

.guarantee p {
    font-size: 1.05em;
    color: var(--text-gray);
    line-height: 1.7;
}

.guarantee-text {
    font-size: 1.05em;
    color: var(--text-gray);
    line-height: 1.7;
    background-color: var(--light-gray);
    padding: 25px;
    border-radius: 10px;
    border-left: 5px solid var(--secondary-color);
}

.guarantee-text strong {
    color: var(--secondary-color);
    font-weight: 700;
}

/* ===== FINAL CTA SECTION ===== */
.final-cta {
    background-color: var(--primary-color);
    color: var(--white-color);
    padding: 60px 0;
}

.final-cta h2 {
    color: var(--white-color);
    font-size: 2.2em;
    margin-bottom: 30px;
}

/* ===== FOOTER ===== */
footer {
    background-color: var(--dark-color);
    color: var(--white-color);
    text-align: center;
    padding: 25px 0;
    font-size: 0.95em;
}

/* ===== MOBILE ADJUSTMENTS (MAX-WIDTH: 768PX) ===== */
@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }

    /* Hero Mobile */
    .hero {
        padding: 30px 0;
    }

    .hero h1 {
        font-size: 1.7em;
        margin-bottom: 15px;
    }

    .hero .subtitle {
        font-size: 1em;
        margin-bottom: 20px;
    }

    .hero-image {
        max-width: 280px;
    }

    /* General Mobile */
    section {
        padding: 40px 0;
    }

    h2 {
        font-size: 1.6em;
        margin-bottom: 25px;
    }

    h2::after {
        margin-top: 12px;
    }

    /* Buttons Mobile */
    .cta-button {
        padding: 12px 24px;
        font-size: 0.95em;
    }

    .cta-button-large {
        padding: 14px 28px;
        font-size: 1em;
        margin: 20px auto 0;
    }

    /* Pain Points Mobile */
    .pain-points li {
        padding: 15px 18px;
        margin-bottom: 10px;
        font-size: 1em;
    }

    /* Product Presentation Mobile */
    .product-presentation p {
        font-size: 1em;
        margin-bottom: 20px;
    }

    .product-presentation li {
        padding: 15px 18px;
        margin-bottom: 10px;
        font-size: 1em;
    }

    /* Benefits Mobile */
    .benefits li {
        padding: 15px 18px;
        margin-bottom: 10px;
        font-size: 1em;
    }

    .benefits li i {
        font-size: 1.2em;
        margin-right: 10px;
    }

    /* Learning Grid Mobile */
    .learning-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .learning-item {
        padding: 25px 20px;
    }

    .learning-item i {
        font-size: 2.4em;
    }

    .learning-item h3 {
        font-size: 1.1em;
    }

    .learning-item p {
        font-size: 0.9em;
    }

    /* FAQ Mobile */
    .objection-handling .faq-item {
        padding: 22px 20px;
        margin-bottom: 15px;
    }

    .objection-handling .faq-item h3 {
        font-size: 1.1em;
        margin-bottom: 10px;
    }

    .objection-handling .faq-item p {
        font-size: 0.95em;
    }

    /* Proof Mobile */
    .proof p {
        font-size: 1em;
    }

    .proof li {
        font-size: 1em;
        padding-left: 25px;
    }

    /* Offer Mobile */
    .offer {
        padding: 50px 0;
    }

    .offer p {
        font-size: 1em;
    }

    .price-box {
        padding: 25px 20px;
        margin: 25px auto;
    }

    .offer .price-highlight {
        font-size: 1.15em;
    }

    .offer .price {
        font-size: 2.5em;
        margin: 12px 0;
    }

    .offer .low-risk {
        font-size: 1em;
    }

    .offer .urgency {
        font-size: 0.95em;
    }

    /* Guarantee Mobile */
    .guarantee {
        padding: 50px 0;
    }

    .guarantee p {
        font-size: 1em;
    }

    .guarantee-text {
        font-size: 1em;
        padding: 20px;
    }

    /* Final CTA Mobile */
    .final-cta {
        padding: 50px 0;
    }

    .final-cta h2 {
        font-size: 1.7em;
        margin-bottom: 25px;
    }

    /* Footer Mobile */
    footer {
        padding: 20px 0;
        font-size: 0.9em;
    }
}

/* ===== MOBILE ADJUSTMENTS (MAX-WIDTH: 480PX) ===== */
@media (max-width: 480px) {
    .container {
        padding: 0 12px;
    }

    /* Hero Extra Mobile */
    .hero h1 {
        font-size: 1.5em;
    }

    .hero .subtitle {
        font-size: 0.95em;
    }

    .hero-image {
        max-width: 240px;
    }

    /* Headings Extra Mobile */
    h2 {
        font-size: 1.4em;
        margin-bottom: 20px;
    }

    /* Buttons Extra Mobile */
    .cta-button-large {
        padding: 12px 20px;
        font-size: 0.9em;
    }

    /* Learning Grid Extra Mobile */
    .learning-item {
        padding: 20px 15px;
    }

    .learning-item i {
        font-size: 2.2em;
    }

    /* Price Extra Mobile */
    .offer .price {
        font-size: 2.2em;
    }

    /* Final CTA Extra Mobile */
    .final-cta h2 {
        font-size: 1.5em;
    }
}
