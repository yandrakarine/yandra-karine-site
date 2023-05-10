import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesENUM } from '../constants';
import { CodeSkillsPage } from '../pages/CodeSkills';
import { ExperiencesPage } from '../pages/Experiences';
import { HomePage } from '../pages/Home';

export function RootRouter() {
  console.log('ta renderizando rootRouter');
  return (
    <Routes>
      <Route element={<HomePage />} exact path={RoutesENUM.HOME} />
      <Route element={<CodeSkillsPage />} path={RoutesENUM.CODE_SKILLS} />
      <Route element={<ExperiencesPage />} path={RoutesENUM.EXPERIENCE} />
    </Routes>
  );
}
