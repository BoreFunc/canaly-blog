import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/cap-rs.svg').default,
    description: (
      <>
        From the first time you use CAP-rs, you'll feel right at home. It's easy to use and easy to get started.
        Want to use it in your favorite language? No problem, we got bindings for multiple languages!
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/wasm-lib.svg').default,
    description: (
      <>
        We got you covered with a fully functional library can be used to parse CAJ files everywhere.
        CAP-rs can be compiled to dynamic library, static library, you can even use it in your browser with WebAssembly!
      </>
    ),
  },
  {
    title: 'Full Control',
    Svg: require('@site/static/img/Module.svg').default,
    description: (
      <>
        Our library follows the philosophy of minimalism, which means it's highly modular and customizable.
        Some features are not used in your project? No problem, just disable them with the feature flags.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
