import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Header from '../header';
import {FormattedMessage} from 'gatsby-plugin-intl';
import cn from 'classnames';
import RightPanel, {Element as NavElement} from '../right-panel';
import styles from './styles.module.scss';

type NavElementsKey = 'Getting started' | 'Examples' | 'API';

type NavElementsMap = {
  [key in NavElementsKey]: Array<NavElement>;
};

const navElementsMap: NavElementsMap = {
  Examples: [
    {
      id: 0,
      label: <FormattedMessage id="examples.simpleFormLocal.title" />,
      link: '/examples/simple-form-local',
    },
    {
      id: 1,
      label: <FormattedMessage id="examples.simpleFormGlobal.title" />,
      link: '/examples/simple-form-global',
    },
    {
      id: 2,
      label: <FormattedMessage id="examples.initialValues.title" />,
      link: '/examples/initial-values',
    },
    {
      id: 3,
      label: <FormattedMessage id="examples.initialValuesAdvanced.title" />,
      link: '/examples/initial-values-advanced',
    },
    {
      id: 4,
      label: <FormattedMessage id="examples.setValuesLocal.title" />,
      link: '/examples/set-values-local',
    },
    {
      id: 5,
      label: <FormattedMessage id="examples.setValuesGlobal.title" />,
      link: '/examples/set-values-global',
    },
    {
      id: 6,
      label: <FormattedMessage id="examples.setValuesAdvanced.title" />,
      link: '/examples/set-values-advanced',
    },
    {
      id: 7,
      label: <FormattedMessage id="examples.fieldLevelValidation.title" />,
      link: '/examples/field-level-validation',
    },
    {
      id: 8,
      label: <FormattedMessage id="examples.formLevelValidation.title" />,
      link: '/examples/form-level-validation',
    },
    {
      id: 9,
      label: <FormattedMessage id="examples.mixValidation.title" />,
      link: '/examples/mix-validation',
    },
    {
      id: 10,
      label: <FormattedMessage id="examples.setErrorLocal.title" />,
      link: '/examples/set-error-local',
    },
    {
      id: 11,
      label: <FormattedMessage id="examples.setErrorGlobal.title" />,
      link: '/examples/set-error-global',
    },
    {
      id: 12,
      label: <FormattedMessage id="examples.serverSideValidation.title" />,
      link: '/examples/server-side-validation',
    },
    {
      id: 13,
      label: <FormattedMessage id="examples.virtualized.title" />,
      link: '/examples/virtualized',
    },
  ],
  API: [
    {
      id: 0,
      label: 'useForm',
      link: '',
    },
  ],
  'Getting started': [],
};

interface IProps {
  children: React.ReactNode;
  menuKey?: NavElementsKey,
}

const Layout = ({
  children,
  menuKey,
}: IProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const withLeftPanel = Boolean(menuKey);

  return (
    <div className={styles.wrap}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={cn(styles.body, {[styles.bodyWithLeftPanel]: withLeftPanel})}>
        <main className={styles.main}>
          <div className={styles.wrapContent}>
            {children}
          </div>
        </main>
        {menuKey && <RightPanel elements={navElementsMap[menuKey]} />}
      </div>
      {/*<footer className={styles.footer}>*/}
      {/*  © {new Date().getFullYear()}*/}
      {/*</footer>*/}
    </div>
  );
};

export default Layout;
