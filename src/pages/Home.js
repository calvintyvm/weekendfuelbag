import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { I18n } from 'react-i18next';

class Home extends Component {
  render() {
    return (
      <I18n>
        {(t, { i18n }) => {
          return (
            <main>
              <h1>{t('home')}</h1>
              <Link to={i18n.language === 'en' ? '/jp' : '/'}>
                {t('switchLang')}
              </Link>
            </main>
          );
        }}
      </I18n>
    );
  }
}

export default Home;
