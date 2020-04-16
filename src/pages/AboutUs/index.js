import PropTypes from 'prop-types';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Layout from '~/layouts/Default';

import Head from '~/components/Head';

import { githubApi } from '~/services/api';

import { Container, Header, MembersContainer, Row, Brands } from './styles';

const discordMembers = {
  devhijazi: {
    username: 'Hijazi',
    discriminator: '#0808',
  },
  pablo1v: {
    username: 'pablo1v',
    discriminator: '#1177',
  },
};
const AboutUsPage = ({ members }) => (
  <Layout>
    <Head
      title="Sobre Nós"
      description="Equipe responsavel pelo desenvolvimento da plataforma"
    />
    <Container>
      <Header>
        <p>
          Site pensado e desenvolvido pela equipe <b>SweetCode</b>.
        </p>
      </Header>
      <MembersContainer>
        {members.map(member => (
          <Row key={member.id}>
            <img src={member.avatar_url} alt="Member Logo" />

            <Brands>
              <span>
                {member.username}
                <span>{member.discriminator}</span>
              </span>

              <a
                href={member.html_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub size="2.8rem" color="#fff" />
              </a>
            </Brands>
          </Row>
        ))}
      </MembersContainer>
    </Container>
  </Layout>
);

AboutUsPage.getInitialProps = async () => {
  const { data } = await githubApi.get('orgs/sweetcodeio/members');

  return {
    members: data.map(member => ({
      ...member,
      ...discordMembers[member.login],
    })),
  };
};
AboutUsPage.propTypes = {
  members: PropTypes.shape().isRequired,
};

export default AboutUsPage;
