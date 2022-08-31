import React from 'react';
import style from './tips.module.css';

export default function Tips({
  setShowTips,
}: {
  setShowTips: (showTips: boolean) => void;
}) {
  return (
    <div className={style.tips}>
      <button className={style.back} onClick={() => setShowTips(false)}>
        👈 Tilbake
      </button>
      <h1>Lørdagstips!</h1>
      <p>
        Vi har samlet noen av våre beste tips til hva vi kan bruke dagen på 👇
      </p>

      <section className={style.categories}>
        <article className={style.category}>
          <div>
            <h2>Shopping 🛍️</h2>
            <ul>
              <li>Strøget</li>
              <li>Studiestræde</li>
              <li>Jægerborgsgade</li>
            </ul>
            <a
              className={style.where}
              href="https://www.google.com/maps/dir/Str%C3%B8get,+K%C3%B8benhavn,+Denmark/Studiestr%C3%A6de,+K%C3%B8benhavn,+Denmark/J%C3%A6gersborggade,+2200+K%C3%B8benhavn,+Denmark//@55.6858222,12.5411449,14z"
              target="_blank"
            >
              Hvor finner jeg det på kartet? ↗️
            </a>
          </div>

          <div className={style.categoryImage}>
            <img
              src={require('./shopping.png')}
              alt="Fotografi av en fontene"
            />
          </div>
        </article>

        <article className={style.reverseCategory}>
          <div>
            <h2>Kultur 🏛️</h2>

            <ul>
              <li>Designcenteret</li>
              <li>Glyptoteket</li>
              <li>Et av byens mange museum</li>
              <li>Bibiloteket (Den Sorte Diamant)</li>
            </ul>

            <a
              className={style.where}
              href="https://www.google.com/maps/dir/DDC+–+Danish+Design+Center,+Bryghuspladsen+8,+Entrance+C,+2nd+floor+Blox,+1473+København,+Danmark/Glyptoteket,+Dantes+Plads,+København,+Danmark/Den+Sorte+Diamant,+Søren+Kierkegaards+Plads,+Københavns+kommune,+Danmark//@55.6732989,12.5695535,14.56z"
              target="_blank"
            >
              Hvor finner jeg det på kartet? ↗️
            </a>
          </div>

          <div className={style.categoryImage}>
            <img src={require('./kultur.png')} alt="Fotografi fra et museum" />
          </div>
        </article>
        <article className={style.category}>
          <div>
            <h2>Pusterom 🧘</h2>

            <ul>
              <li>Botanisk Have</li>
              <li>Kongens Have</li>
              <li>Christiania</li>
            </ul>

            <a
              className={style.where}
              href="https://www.google.com/maps/dir/Botanisk+have,+Gothersgade+128,+1123+K%C3%B8benhavn+K,+Danmark/Kongens+Have,+%C3%98ster+Voldgade+4A,+1350+K%C3%B8benhavn,+Danmark/Christiania,+K%C3%B8benhavns+kommune,+Danmark//@55.6809588,12.5757019,13.72z"
              target="_blank"
            >
              Hvor finner jeg det på kartet? ↗️
            </a>
          </div>

          <div className={style.categoryImage}>
            <img
              src={require('./pusterom.png')}
              alt="Fotografi fra botanisk have"
            />
          </div>
        </article>

        <article className={style.reverseCategory}>
          <div>
            <h2>Avslapning 😌</h2>

            <ul>
              <li>Sykkeltur rundt i København, påmelding til Kristin</li>
              <li>Hydrering i Kødbyen</li>
              <li>Avslapning i hotellets hage</li>
            </ul>
          </div>

          <div className={style.categoryImage}>
            <img
              src={require('./avslapning.png')}
              alt="En fotograf på Nyhavna"
            />
          </div>
        </article>
      </section>

      <article className={style.metro}>
        <h2>Psst!</h2>
        <p>
          København har fått en ny metro, som går i ring rundt byen og har
          holdeplass rett utenfor hotellet. Smart! 🚇
        </p>
      </article>
      <button className={style.back} onClick={() => setShowTips(false)}>
        👈 Tilbake
      </button>
    </div>
  );
}

// https://www.google.com/maps/dir/33.93729,-106.85761/33.91629,-106.866761/33.98729,-106.85861//@34.0593359,-106.7131944,11z
