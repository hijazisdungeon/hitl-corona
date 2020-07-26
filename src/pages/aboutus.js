import React, { useEffect, useState } from 'react';
import { FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

import developers from '~/data/developers';

import Layout from '~/layouts/Default';

import Head from '~/components/Head';
import Link from '~/components/Link';
import Slider from '~/components/Slider';

import { githubApi } from '~/services/api';

import {
  Container,
  Content,
  Section,
  MembersContainer,
  Row,
  BrandsContainer,
} from '~/styles/pages/aboutus';

const AboutUsPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function getMembers() {
      const { data } = await githubApi.get('orgs/hitechline/members');

      setMembers(
        data.map(member => Object.assign(member, developers[member.login])),
      );
    }

    getMembers();
  }, []);

  return (
    <>
      <Head
        title="Covid Agora | Sobre Nós"
        description="Veja a equipe responsavel pelo desenvolvimento da plataforma."
        image="static/images/aboutus/team.jpg"
      >
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="620" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="620" />
      </Head>

      <Layout loading={!members.length}>
        <Container>
          <Content>
            <Slider
              images={[
                '/static/images/aboutus/slider_01.jpg',
                '/static/images/aboutus/slider_02.jpg',
                '/static/images/aboutus/slider_03.jpg',
              ]}
            />

            <div>
              <h1>
                Hitech<span>line</span>
              </h1>
              <p>
                Desenvolvedora oficial do <span>Covid Agora</span>
              </p>

              <span>
                <Link href="#team">
                  <FiChevronDown size={55} color="#57bcff" />
                </Link>
              </span>
            </div>
          </Content>

          <Section id="team">
            <div className="title">
              <img
                src="/static/images/aboutus/icons/computer.png"
                alt="Computer Icon"
              />

              <h1>DESENVOLVEDORES</h1>
            </div>

            <MembersContainer>
              {members.map(member => (
                <Row key={member.id}>
                  <img src={member.avatar_url} alt="Member Logo" />

                  <span>{member.username}</span>

                  <BrandsContainer>
                    <a
                      href={member.html_url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaGithub color="#000" size="3.5rem" />
                    </a>
                    <a
                      href={member.discordLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaDiscord color="#7289DA" size="3.5rem" />
                    </a>

                    {member.instagram && (
                      <a
                        href={member.instagram}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaInstagram color="#7289DA" size="3.5rem" />
                      </a>
                    )}
                  </BrandsContainer>
                </Row>
              ))}
            </MembersContainer>
          </Section>
        </Container>
      </Layout>
    </>
  );
};

export default AboutUsPage;
