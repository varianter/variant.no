import React, { useMemo } from 'react';
import { NextPage, InferGetStaticPropsType } from 'next';
import Layout from 'src/layout';
import style from './index.module.css';
import Link from 'next/link';
import { Interview } from 'src/kunde/utils/customerUtils';
import { getStaticProps } from 'pages/kunde/[oppdrag]';
import DecorativeBoxes from '@components/decorative-boxes';
import MarkdownIt from 'markdown-it';

const createHtmlFromMetadata = () => {
  let html =
    '<div class="variant">' +
    '<div class="imageContainer">' +
    '<figure>' +
    '<div class="img__decorationBox"></div>' +
    '<div class="img__decorationBox"></div>' +
    '</figure>' +
    '</div>' +
    '<div>' +
    '</div>' +
    '</div>';

  return html;
};

const Svv: NextPage<InferGetStaticPropsType<typeof getStaticProps>> =
  React.memo(({ assignment, interviews }) => {
    const innerHtml = useMemo(() => {
      const md = new MarkdownIt({
        linkify: true,
        html: true,
        typographer: true,
      });
      let html = md.render(assignment.content);

      const htmlFromMetadata = createHtmlFromMetadata();

      return {
        __html: html.replace('variant_info_placeholder', htmlFromMetadata),
      };
    }, [assignment]);

    return (
      <Layout title={assignment.meta_title}>
        {/* <SayHi
          className={style.sayhi}
          href="/jobs"
          rel="noopener"
          text="Bli en variant!"
        /> */}
        <section className={style.project}>
          <div className={style.project__introduction}>
            <h2>{assignment.meta_customer}</h2>
            <p className="lead">{assignment.meta_lead}</p>
            <div className={style.project__introduction__location}>
              <p>
                <strong>Ansvarlig lokasjon</strong>
              </p>
              <div className={style.location}>
                {assignment.meta_locations.map((location, idx) => {
                  return <span key={idx}>{location}</span>;
                })}
              </div>
            </div>
          </div>

          <div className={style.project__subprojects}>
            {assignment.meta_projects.map((project, idx) => {
              return (
                <div
                  key={idx}
                  className={
                    assignment.meta_project_text_position_left
                      ? style.subproject__left
                      : style.subproject__right
                  }
                >
                  <figure className={style.imageContainer}>
                    <DecorativeBoxes
                      box1Properties={{
                        color: `#${project.project_image.boxProperties1.color}`,
                        position: `${project.project_image.boxProperties1.vertical}-${project.project_image.boxProperties1.horizontal}`,
                      }}
                      box2Properties={{
                        color: `#${project.project_image.boxProperties2.color}`,
                        position: `${project.project_image.boxProperties2.vertical}-${project.project_image.boxProperties2.horizontal}`,
                      }}
                      boxSize={70}
                    >
                      <img src={project.project_image.image_src} alt="case" />
                    </DecorativeBoxes>
                  </figure>
                  <div>
                    <h2 className="lead">{project.project_title}</h2>
                    <p>{project.project_text}</p>
                  </div>
                </div>
              );
            })}
            <article
              className={style.rendered__markdown__wrapper}
              dangerouslySetInnerHTML={innerHtml}
            ></article>
          </div>

          <div>
            <h2 className={style.textCenter}>Variantenes egne ord</h2>
            <div className={style.project__interviews}>
              {interviews?.map((interview: Interview, idx) => {
                return (
                  <div key={idx} className={style.project__interview}>
                    <p className={style.textCenter}>
                      <strong>{interview.variant}</strong>
                    </p>
                    <p className={style.textCenter}>{interview.variantTitle}</p>
                    <img src={interview.image} alt={interview.imageAltText} />
                    <p>{interview.quote}</p>
                    <Link href={interview.name}>
                      <a className={style.buttonLink}>
                        <strong>Les mer</strong>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={style.contribution}>
            <h2 className={style.textCenter}>Vårt bidrag</h2>
            <div>
              <div className={style.contributionElements}>
                <p>
                  En setning eller to for å oppsummere her. I høyremargen:
                  Vinkle opp mot tjenesteområder, få frem helheten av det som
                  leveres.
                </p>
                <img src="/images/tjenestefjell.png" alt="Tjenestefjell" />
              </div>

              <div className={style.contributionElements}>
                <div>
                  {assignment.meta_contribution_digital_productdevelopment ===
                  null ? (
                    <></>
                  ) : (
                    <p>
                      <img src="/images/bulletpoint.svg" alt="bulletpoint" />
                      <strong>Digital produktutvikling</strong>
                    </p>
                  )}
                  <p>
                    {assignment.meta_contribution_digital_productdevelopment}
                  </p>
                </div>
                <div>
                  {assignment.meta_contribution_data_driven === null ? (
                    <></>
                  ) : (
                    <p>
                      <img src="/images/bulletpoint.svg" alt="bulletpoint" />
                      <strong>Datadrevet</strong>
                    </p>
                  )}
                  <p>{assignment.meta_contribution_data_driven}</p>
                </div>
                <div>
                  <p>
                    {assignment.meta_contribution_strategy === null ? (
                      <></>
                    ) : (
                      <p>
                        <img src="/images/bulletpoint.svg" alt="bulletpoint" />
                        <strong>Strategi</strong>
                      </p>
                    )}
                  </p>
                  <p>{assignment.meta_contribution_strategy}</p>
                </div>
                <div>
                  <p>
                    {assignment.meta_contribution_culture_first === null ? (
                      <></>
                    ) : (
                      <p>
                        <img src="/images/bulletpoint.svg" alt="bulletpoint" />
                        <strong>Culture first</strong>
                      </p>
                    )}
                  </p>
                  <p>{assignment.meta_contribution_culture_first}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.quote}>
            <blockquote>{assignment.meta_quote}</blockquote>
          </div>
        </section>
      </Layout>
    );
  });

export default Svv;
