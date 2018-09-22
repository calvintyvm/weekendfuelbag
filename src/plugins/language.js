import React from 'react';
import { OnUpdate } from 'rrc';
import i18n from './i18n';
import appConfig from 'src/config/app.conf';

const updateLanguage = location => {
  let language = location.pathname.split('/')[1];
  if (process.env.__LOCALES__.includes(language)) {
    i18n.changeLanguage(language);
  } else {
    i18n.changeLanguage(appConfig.defaultLocale);
  }
};

const UpdateLanguage = ({ location }) => {
  return (
    <OnUpdate
      immediate
      call={location => {
        window.scrollTo(0, 0);
        updateLanguage(location);
      }}
    />
  );
};

export default UpdateLanguage;
