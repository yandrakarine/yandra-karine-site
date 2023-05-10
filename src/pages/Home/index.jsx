import {
  AboutMeTitle,
  HomeAvatar,
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
      <Welcome children={'Hi, there!'} />
      <HomeAvatar />
      <PageContent>
        <MyName children={'Yandra Karine'} />
        <MyDescriptionJob children={'Front end Developer with React.js'} />
        <AboutMeTitle children={'A little about me'} />
        <MySumary
          children={
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'
          }
        />
      </PageContent>
    </Wrapper>
  );
};
