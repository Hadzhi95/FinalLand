import React, { useRef, lazy, Suspense } from "react";
import styles from './Index.scss';
const Land1 = lazy(() => import('../../components/1/1'));
const Land2 = lazy(() => import('../../components/2/2'));
const Land3 = lazy(() => import('../../components/3/3'));
const Land4 = lazy(() => import('../../components/4/4'));
const Land5 = lazy(() => import('../../components/5/5'));
const Land6 = lazy(() => import('../../components/6/6'));
const Land7 = lazy(() => import('../../components/7/7'));
const Land8 = lazy(() => import('../../components/8/8'));
const Land9 = lazy(() => import('../../components/9/9'));
const Land10 = lazy(() => import('../../components/10/10'));
const Land11 = lazy(() => import('../../components/11/11'));
const Land12 = lazy(() => import('../../components/12/12'));
const Land13 = lazy(() => import('../../components/13/13'));
const Land14 = lazy(() => import('../../components/14/14'));
const Land15 = lazy(() => import('../../components/15/15'));
const Land16 = lazy(() => import('../../components/16/16'));
const Land17 = lazy(() => import('../../components/17/17'));
const Land18 = lazy(() => import('../../components/18/18'));
const Land19 = lazy(() => import('../../components/19/19'));
const Land20 = lazy(() => import('../../components/20/20'));

function Index() {
  const mentorsRef = useRef(null);
  return (
    <>
      <div className={styles.container}>
      <Suspense fallback={<div></div>}>
        <Land1 />
        <Land2 />
        <Land3 />
        <Land4 />
        <Land5 />
        <Land6 />
        <Land7 />
        <Land8 ref={mentorsRef} />
        <Land9 ref={mentorsRef} />
        <Land10 />
        <Land11 />
        <Land12 />
        <Land13 />
        <Land14 />
        <Land15 />
        <Land16 />
        <Land17 />
        <Land18 />
        <Land19 />
        <Land20 />
        </Suspense>
      </div>

    </>
  );
}

export default Index;