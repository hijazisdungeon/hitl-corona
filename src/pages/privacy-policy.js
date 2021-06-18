import { Head } from '~/components/Head';
import { DefaulLayout } from '~/layouts/Default';
import { Container } from '~/styles/pages/privacy-policy';

const PrivacyPolicy = () => (
  <>
    <Head title="Covid Agora | Política de Privacidade" />

    <DefaulLayout>
      <Container>
        <h1> Política de Privacidade </h1>

        <ol>
          <li>
            <h2>Política de privacidade</h2>
            <p>
              Todas as suas informações pessoais recolhidas, serão usadas para o
              ajudar a tornar a sua visita no nosso site o mais produtiva e
              agradável possível. A garantia da confidencialidade dos dados
              pessoais dos utilizadores do nosso site é bastante importante.
              Todas as informações pessoais relativas a membros, assinantes,
              clientes ou visitantes que usem a plataforma serão tratadas em
              concordância com a Lei da Proteção de Dados Pessoais de 26 de
              outubro de 1998 (Lei n.º 67/98). O uso do <b>Covid Agora</b>{' '}
              {/* eslint-disable-next-line no-irregular-whitespace */}
              pressupõe a aceitação deste acordo de privacidade. A equipa do
              <b>Covid Agora</b> reserva-se ao direito de alterar este acordo
              sem aviso prévio. Deste modo, recomendamos que consulte a nossa
              política de privacidade com regularidade de forma a estar sempre
              atualizado.
            </p>
          </li>
          <li>
            <h2>Informações que coletamos ?</h2>

            <ul style={{ marginLeft: '20px' }}>
              <li style={{ listStyle: 'disc' }}>
                <p>Localização</p>
              </li>
            </ul>
          </li>
          <li>
            <h2>Anúncios</h2>
            <p>
              Tal como outros websites, coletamos e utilizamos informação
              contida nos anúncios. A informação contida nos anúncios, inclui o
              seu endereço IP (Internet Protocol), o seu ISP (Internet Service
              Provider, como o Sapo, Clix, ou outro), o browser que utilizou ao
              visitar o nosso website (como o Internet Explorer, Google Chrome
              ou o Firefox), o tempo da sua visita e que páginas visitou dentro
              do nosso website.
            </p>
          </li>
          <li>
            <h2>Cookies</h2>
            <p>
              Utilizamos cookies para armazenar informação, tais como as suas
              preferências pessoais quando visita o nosso website. Isto poderá
              incluir um simples popup, ou uma ligação em vários serviços que
              providenciamos, tais como fóruns. Em adição também utilizamos
              publicidade de terceiros no nosso website para suportar os custos
              de manutenção. Alguns destes publicitários, poderão utilizar
              tecnologias como os cookies e/ou web beacons quando publicitam no
              nosso website, o que fará com que esses publicitários (como o
              Google através do Google AdSense) também recebam a sua informação
              pessoal, como o endereço IP, o seu ISP, o seu browser, etc. Esta
              função é geralmente utilizada para geotargeting (mostrar
              publicidade de Lisboa apenas aos leitores oriundos de Lisboa por
              ex.) ou apresentar publicidade direcionada a um tipo de utilizador
              (como mostrar publicidade de restaurante a um utilizador que
              visita sites de culinária regularmente, por ex.). Você detém o
              poder de desligar os seus cookies, nas opções do seu browser, ou
              efetuando alterações nas ferramentas de programas Anti-Virus, como
              o Norton Internet Security. No entanto, isso poderá alterar a
              forma como interage com o nosso website, ou outros websites. Isso
              poderá afetar ou não permitir que faça logins em programas, sites
              ou fóruns da nossa e de outras redes.
            </p>
          </li>
          <li>
            <h2>Ligações a Conteúdo de terceiros</h2>
            <p>
              A plataforma não possui quaisquer ligação com sites de terceiros
              vale a pena lembrar que não nos <b>responsabilizamos</b> por
              quaisquer problemas de outros sites que usam o nome{' '}
              <b>Covid Agora</b>. Para saber se o site é legítimo apenas confira
              a equipe de desenvolvimento na pagina de{' '}
              <a href="/aboutus" target="_blank" rel="noopener noreferrer">
                inforamções sobre a equipe
              </a>{' '}
              ou no repositório no{' '}
              <a
                href="https://github.com/hitechline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              .
            </p>
            <p>
              Utilizamos dados de uma <b>API</b> externa para mante-los
              informados. Verificamos a veracidade dos dados para que possamos
              entregar a real situação aos nossos usuários.
            </p>
          </li>
          <li>
            <h2>Atualização dessa politica</h2>
            <p>
              A Hitechline responsável pela produção do site <b>Covid Agora</b>{' '}
              se compromete em atualizar esta política sempre que houver
              necessidade, assim garantimos segurança a todos os nossos usuários
              e visitantes e segurança própria por parte da equipe é essencial
              que todos leiam atentamente todos os tópicos da politica para que
              possamos garantir segurança a todos os usuários.
            </p>
          </li>
        </ol>
      </Container>
    </DefaulLayout>
  </>
);

export default PrivacyPolicy;
