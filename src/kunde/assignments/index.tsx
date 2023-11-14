import React, { useMemo } from 'react';
import { NextPage, InferGetStaticPropsType } from 'next';
import Layout from 'src/layout';
import style from './index.module.css';
import Link from 'next/link';
import { Interview } from 'src/kunde/utils/customerUtils';
import { getStaticProps } from 'pages/kunde/[oppdrag]';
import DecorativeBoxes from '@components/decorative-boxes';
import MarkdownIt from 'markdown-it';
import { Heading1 } from '@components/heading';

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
    const positionTextLeft = (left: boolean, idx: number) => {
      if (left && idx % 2 == 0) {
        return true;
      } else if ((left && !(idx % 2 == 0)) || (!left && idx % 2 == 0)) {
        return false;
      } else {
        return true;
      }
    };

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

    const ourContributionIsEmpty = () => {
      if (
        assignment.meta_contribution_digital_productdevelopment === null &&
        assignment.meta_contribution_data_driven === null &&
        assignment.meta_contribution_digital_productdevelopment === null &&
        assignment.meta_contribution_strategy === null
      ) {
        return true;
      } else {
        return false;
      }
    };

    return (
      <Layout title={assignment.meta_title}>
        <section className={style.project}>
          <div className={style.project__introduction}>
            <Heading1 styleLevel="2">{assignment.meta_customer}</Heading1>
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
                <div key={idx} className={style.subproject}>
                  <figure
                    style={
                      positionTextLeft(
                        assignment.meta_project_text_position_left,
                        idx,
                      )
                        ? { order: 1, marginLeft: '5rem', marginRight: '0' }
                        : { order: 0, marginLeft: 0, marginRight: '5rem' }
                    }
                    className={style.imageContainer}
                  >
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
                    <img
                      src={interview.imageUrl}
                      alt={interview.imageAltText}
                    />
                    <p>{interview.quote}</p>
                    <Link href={interview.name} className={style.buttonLink}>
                      <strong>Les mer</strong>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={style.contribution}>
            {ourContributionIsEmpty() ? (
              <></>
            ) : (
              <h2 className={style.textCenter}>Vårt bidrag</h2>
            )}
            <div>
              <div className={style.contributionElements}>
                <div>
                  {assignment.meta_contribution_digital_productdevelopment ===
                  null ? (
                    <></>
                  ) : (
                    <div className={style.contributionElements__text}>
                      <img
                        src="/images/customer/digitalProduct.png"
                        alt="Blob med datamaskin"
                      />
                      <div>
                        <p>
                          <strong>Digital produktutvikling</strong>
                        </p>
                        <p>
                          {
                            assignment.meta_contribution_digital_productdevelopment
                          }
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  {assignment.meta_contribution_data_driven === null ? (
                    <></>
                  ) : (
                    <div className={style.contributionElements__text}>
                      <img
                        src="/images/customer/dataProduct.png"
                        alt="Blob med datamaskin"
                      />
                      <div>
                        <p>
                          <strong>Dataproduktutvikling</strong>
                        </p>
                        <p>{assignment.meta_contribution_data_driven}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  {assignment.meta_contribution_strategy === null ? (
                    <></>
                  ) : (
                    <div className={style.contributionElements__text}>
                      <img
                        src="/images/customer/strategyDevelopment.png"
                        alt="Blob med datamaskin"
                      />
                      <div>
                        <p>
                          <strong>Strategiutvikling</strong>
                        </p>
                        <p>{assignment.meta_contribution_strategy}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <p>
                    {assignment.meta_contribution_culture_first === null ? (
                      <></>
                    ) : (
                      <div className={style.contributionElements__text}>
                        <img
                          src="/images/customer/culture.png"
                          alt="Blob med datamaskin"
                        />
                        <div>
                          <p>
                            <strong>Kulturutvikling</strong>
                          </p>
                          <p>{assignment.meta_contribution_culture_first}</p>
                        </div>
                      </div>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  });

export default Svv;
