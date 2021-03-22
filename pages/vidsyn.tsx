import Head from 'next/head';
import Layout from 'src/layout';
import { and } from 'src/utils/css';
import style from './vidsyn.module.css';

export default function Invitation() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Vidsyn 21</title>
                </Head>
                <section className={style.omVariant}>
                    <header>
                        <h2 className={style.omVariant__title}>Velkommen til Vidsyn 21</h2>
                        <p className={style.subtitle}>Oslo pluss Trondheim er sant!</p>
                    </header>
                    <div>
                        <img
                            className={style.right_image}
                            src="/images/vidsyn.png"
                            alt="Oversiktssbilde over et landskap"
                            />
                        
                        <p>
                            Det er med stor glede vi inviterer til Variants årlige ledersamling Vidsyn. Ved jevne
                            mellomrom har vi behov for å stoppe opp, løfte blikket og tenke lengre og bredere tanker.
                            Vidsyn defineres som en åpen og fordomsfri innstilling. Som en tenkemåte preget av
                            bredde i erfaringer, kunnskaper. Dette er målet med med samlingen.
                        </p>
                        <p>
                            Vidsyn inngår i Variants ledelsessyklus, og er en felles samling på konsernivå, hvor
                            ledelsen i alle selskaper sammen med konsernets ledelse samles. De enkelte selskapene har
                            utover dette egne ledersamlinger med fokus på sitt selskap.
                        </p>
                        <p>
                            I anledningen av å være Variants første Vidsynsamling er det naturlig nok den første 
                            samlingen hvor vi konkret kan forholde oss til Oslo. Temaet for årets samling blir
                            derfor selvfølgelig <i>"Oslo pluss Trondheim er sant!"</i> Hovedmelodien på samlingen
                            er altså hvordan skal vi få dette konsernet til å fly!
                        </p>

                    </div>

                    <div>
                        <h3 className="fancy">Tidsplan 19. - 20. april</h3>
                        Mandag 19. april
                        <ul className={style.agenda}>
                            <li>
                                <span className={style.time}> 12.00-13.00</span> 🥙 Lunsj
                            </li>
                            <li>
                                <span className={style.time}> 13.00-17.00</span> 👁 Vidsyn og langsyn
                            </li>
                            <li>
                                <span className={style.time}> 19.00-23.30</span> 🍽 Middag
                            </li>
                        </ul>
                        Tirsdag 20. april
                        <ul className={style.agenda}>
                            <li>
                                <span className={style.time}> 07.30-09.00</span> 🍳 Frokost
                            </li>
                            <li>
                                <span className={style.time}> 09.00-12.00</span> 👓 Smalsyn
                            </li>
                            <li>
                                <span className={style.time}> 12.00-13.00</span> 🥪 Lunsj
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="fancy">Vidsyn og langsyn</h3>

                        <p>
                            Denne sesjonen er divergerende, her er vidsynet viktig. Sesjonen er 4 timer lang.
                            Vi har dermed rom for 4 tema. Vi ber om at alle tenker igjennom hvilke tema
                            de ønsker tatt opp til behandling.
                        </p>

                        <p>
                            Foreløpig har vi følgende forslag:
                            <ul>
                                <li>
                                    Hvilke behov har vi som skal løses av konsernet? Innledning Anders
                                </li>
                                <li>
                                    Hvordan kan vi øke engasjementet rundt læreglede? Innledning Mikael
                                </li>
                                <li>
                                    Hvilke synergier kan vi få på tvers av byer? Innledning Tonje 
                                </li>
                                <li>
                                    Ledig
                                </li>
                            </ul>
                        </p>


                        <p className={style.prep}>
                            <strong>Innledning</strong> - De som skal innlede hver sesjon får 10 minutter
                            til å pressentere problemstillingen. Hvilke utforeringer står vi overfor,
                            hva ønsker man å oppnå? Hva vil vi sitte igjen med hvis vi når målet? Hvordan
                            vil det gå hvis vi derimot ikke når det?
                        </p>
                    </div>

                    <div>
                        <h4 >Middag</h4>
                        <p>
                            Med dagens vidsyn som bakteppe spiser vi en bedre middag. Sammen med sosialt samvær og
                            mulighet til å bli bedre kjent på tvers av kontor, er målet at en annen setting og 
                            nytt fysisk perspektiv gir diskusjonene tidligre på dagen en ny dimensjon.
                        </p>
                    </div>

                    <div>
                        <h4 >Smalsyn</h4>
                        <p>
                            Tirsdagens smalsynsesjon handler om å konkretisere og operasjonalisere gårsdagens
                            diskusjoner og mulighetsbilde. De samme tema som ble diskutert i går skal i dag behandles.
                            Målet nå er å lage konrete tiltak og dokumentere hva vi skal gjøre slik at vi fra neste dag av
                            er fult ut i stand til å "execute as hell".
                        </p>
                    </div>
                    <div>
                        <h3 className="fancy">Pellestova</h3>
                        <img
                            className={style.right_image}
                            src="/images/pellestova.png"
                            alt="Peisen i Pellestova"
                            />
                        <p>
                            Vidsyn 21 holdes på  <a href="https://pellestova.no/">Pellestova</a>, 
                            et moderne fjellhotell med sjel,  i Øyer kommune (med mindre det har vært 
                            en kommunesammenslåing her).
                        </p>
                        <p>                            
                            Helt siden 1946 har skiløpere kommet for en kafferast på Pellestova. 
                            I dag er det ikke lenger ei lita bu, men et fullverdig fjellhotell 
                            med fokus på kvalitet og kortreiste råvarer. Den innholdsrike vinkjeller 
                            er også av de sjeldne – det er ikke mange andre steder du finner et slikt 
                            utvalg så mange meter over havet.

                        </p>
                    </div>
                    <div>
                        <h3 className="fancy">Reise</h3>
                        <p>
                            Det er mulig å reise både fra Trondheim og Oslo med tog. Vi vil dog 
                            anbefale å bruke personbil. Og da at man samkjører i den grad det er mulig. 
                            Fra Trondheim må man beregne 5 timer en vei, fra Oslo ca det halve. 
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
