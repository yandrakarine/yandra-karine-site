import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../../constants';
import {
  AboutMeTitle,
  HomeAvatar,
  HomeToolsAndLAnguagesRow,
  MyDescriptionJob,
  MyName,
  MySumary,
  PageContent,
  Welcome,
  Wrapper,
} from './style';

export const HomePage = () => {
  return (
    <Wrapper>
      <Welcome children={'Olá, Mundo!'} />
      <HomeAvatar />
      <PageContent>
        <MyName children={'Yandra Karine'} />
        <MyDescriptionJob children={'Desenvolvedora frontend com React.js'} />
        <HomeToolsAndLAnguagesRow>
          {skills.map(({ skill, icon, color }) => (
            <FontAwesomeIcon
              icon={icon}
              style={{ color: color }} // aqui vai mudar de acordo com o theme(ligth:dark) '#5e5c7f'
              size='2x'
              title={skill}
            />
          ))}
        </HomeToolsAndLAnguagesRow>
        <AboutMeTitle children={'Um pouco sobre mim'} />
        <MySumary
          children={
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'
          }
        />
      </PageContent>
    </Wrapper>
  );
};
