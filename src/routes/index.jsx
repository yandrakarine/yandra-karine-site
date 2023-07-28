import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RoutesENUM } from '../constants';
import { CodeSkillsPage } from '../pages/CodeSkills';
import { ExperiencesPage } from '../pages/Experiences';
import { HomePage } from '../pages/Home';
import { Settigs } from '../pages/settings';

export function RootRouter() {
  return (
    <Routes>
      <Route element={<HomePage />} exact path={RoutesENUM.HOME} />
      <Route element={<ExperiencesPage />} exact path={RoutesENUM.EXPERIENCE} />
      <Route element={<CodeSkillsPage />} exact path={RoutesENUM.CODE_SKILLS} />
      <Route element={<ExperiencesPage />} exact path={RoutesENUM.EXPERIENCE} />
      <Route element={<Settigs />} exact path={RoutesENUM.SETTINGS} />
      <Route path='/' element={<Navigate replace to='/home' />} />
    </Routes>
  );
}
