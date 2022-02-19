import Head from 'next/head';
import Layout from 'src/layout';
import { and } from 'src/utils/css';
import style from './vidsyn.module.css';

export default function Invitation() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Vidsyn 22</title>
                </Head>
                <section className={style.omVariant}>
                    <header>
                        <p className={style.supertitle}>Velkommen til </p>
                        <h2 className={style.omVariant__title}>Vidsyn 22</h2>
                        <p className={style.subtitle}>Retrospektiv og perspektiv!</p>
                    </header>
                    <div>
                        <img
                            className={and(style.right_image, style.image)}
                            src="/images/vidsyn.png"
                            alt="Oversiktssbilde over et landskap"
                            />
                        
                        <p>
                            Det er med stor glede vi inviterer til Variants årlige ledersamling Vidsyn. Ved jevne
                            mellomrom har vi behov for å stoppe opp, løfte blikket og tenke lengre og bredere tanker.
                            Vidsyn defineres som en åpen og fordomsfri innstilling. Som en tenkemåte preget av
                            bredde i erfaringer, kunnskaper. Dette er målet med samlingen.
                        </p>
                        <p>
                            Vidsyn inngår i Variants ledelsessyklus, og er en felles samling på konsernnivå, hvor
                            ledelsen i alle selskaper sammen med konsernets ledelse samles. De enkelte selskapene har
                            utover dette egne ledersamlinger med fokus på sitt selskap.
                        </p>
                        <p>
                            Denne gangen legger vi vekt på tre hovedområder. Det ene, <strong>retrospektiv</strong>, handler om å lære 
                            av våre første levemåneder som et konsern med kontor i flere byer. Det andre 
                            er <strong>forretningsmodell</strong> hvor vi prøver å se på hvordan våre ulike strategier henger sammen, 
                            og om vi kan utvikle nye tjenesteområder eller forbedre de eksisterende. Det siste området 
                            er <strong>perspektiv</strong>. Her prøver vi å løfte blikket enda lenger fram, ja helt til 2028. 
                        </p>

                    </div>

                    <div>
                        <h3 className="fancy">Tidsplan 28. februar - 1. mars</h3>
                        Mandag 28. februar
                        <ul className={style.agenda}>
                            <li>
                                <span className={style.time}> 09.00-12.00</span> 👀 Retrospektiv
                            </li>
                            <li>
                                <span className={style.time}> 12.00-13.00</span> 🥙 Lunsj
                            </li>
                            <li>
                                <span className={style.time}> 13.00-17.00</span> 🏦 Forretningsmodell og tjenesteområder
                            </li>
                            <li>
                                <span className={style.time}> 18.00-19.00</span> 🌺 Flower shower
                            </li>
                            <li>
                                <span className={style.time}> 19.00-23.30</span> 🍽 Middag
                            </li>
                        </ul>
                        Tirsdag 20. april
                        <ul className={style.agenda}>
                            <li>
                                <span className={style.time}> 07.00-08.00</span> 🍳 Frokost
                            </li>
                            <li>
                                <span className={style.time}> 08.00-11.30</span> 🧑🏻‍🔧 Tjenesteområder
                            </li>
                            <li>
                                <span className={style.time}> 11.30-12.30</span> 🥪 Lunsj
                            </li>
                            <li>
                                <span className={style.time}> 12.30-15.300</span> 🌍 Perspektiv
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h3 className="fancy">Retrospektiv, nåtid og perspektiv</h3>
                        <div className={style.agendaDetails}>
                                <p className={style.agendaItem} > Retrospektive</p>
                                <p className={style.topic}>Samspillet mellom konsernet, Trondheim og Oslo. 
                                    Hva fungerer bra, og hva kan bli bedre? Hvilke læringsmomenter er det viktig å ta med 
                                    nå som vi etablerer i Bergen?</p> 
                                <p className={style.initiator}>Fasilitering <strong>Tore</strong></p>

                                <p className={style.agendaItem} > Forretningsmodell</p>
                                <p className={style.topic}>Hvordan henger vår forretningsmodell sammen? 
                                Hvordan og hvor godt passer våre ulike strategier med vår forretningsmodell. Harmonerer våre strategier, og 
                                har vi gode måter å styre etter disse strategiene. 
                                </p>
                                <p className={style.initiator}>Innledning <strong>Odd Morten</strong></p>

                                <p className={style.agendaItem}>Tjenesteområder</p>
                                <p className={style.topic}>Hvilke tjenesteområder har vi i dag? 
                                Hvor godt treffe de kunder og ansatte? Finnes det andre områder? Det er ønskelig at vi kommer fram til 
                                flere ambisjoner på konsernnivå, som de ulike driftsselskapene velge blant for å jobbe mot.  </p>
                                <p className={style.initiator}>Innledning <strong>Anders</strong> </p>
                                
                                <p className={style.agendaItem}>Perspektiv</p>
                                <p className={style.topic}>Hva skjer med Variant Utland? 
                                Hvordan ser vårt fjellkart ut nå? Hvile småtopper har vi foran oss? Hvilke vekstambisjoner har vi og hvorfor?
                                Perspektiv 2028 - i 2028 er vi 10 år. Skal vi fortsatt sponse langrennslaget? Hvordan ser vi ut da? 
                                Kan vi i dag skrive en framtidig pressemelding?</p>
                                <p className={style.initiator}>Innledning <strong>Anders</strong> og <strong>Odd Morten</strong> </p>
                         </div>
                    
                        


                    </div>

                    <div>
                        <h4 >Middag</h4>
                        <p>
                            Med dagens vidsyn som bakteppe spiser vi en bedre middag. Sammen med sosialt samvær og
                            mulighet til å bli bedre kjent på tvers av kontor, er målet at en annen setting og 
                            nytt fysisk perspektiv gir diskusjonene tidligere på dagen en ny dimensjon.
                        </p>
                    </div>

                    <div>
                        <h3 className="fancy">Lysebu</h3>
                        <img
                            className={and(style.right_image, style.image)}
                            src="/images/lysebu.png"
                            alt="Lysebu i vinterdrakt"
                            />
                        <p>
                            Vidsyn 22 holdes på  <a href="https://lysebu.no/">Lysebu</a>.
                            Lysebus historie er tuftet på verdier som generøsitet, takknemlighet 
                            og omtanke. Disse verdiene sitter i veggene og inspirerer oss hver eneste dag.

                        </p>
                        <p>                            
                        Under andre verdenskrig samlet det danske folk inn store summer for å sende mat til 
                        Norge. Det ble delt ut flere tusentalls matpakker over hele landet - Norgeshjelpen sendte 
                        daglig hele 22 tonn matvarer fra Danmark til Norge under krigen. I 1945 stod det igjen 13 
                        millioner kroner fra. Disse pengene la grunnlaget for Fondet for dansk- norsk samarbeid. 
                        Som takk for hjelpen under krigen, ga Norge Lysebu i gave til Fondet.

                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
