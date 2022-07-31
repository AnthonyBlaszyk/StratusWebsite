import { useRouter } from "next/router";
import React from "react";
import categories from "../../utilities/categories";
import Head from "next/head";

const Layout = (mainComponent: JSX.Element): JSX.Element => {
  const GetUrlSlug = () => {
    const router = useRouter();
    const pid = router.asPath;

    return pid;
  };

  return (
    <>
      <Head>
        <title>Stratus</title>
        <meta name="description" content="Stratus, une identité visuelle à votre image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        <div id="nav-left">
          <div>
            <ul>
              {categories.map((category) => {
                if (GetUrlSlug() == `/${category.slug}`) {
                  return (
                    <li key={category.slug}>
                      <a
                        href={`/${category.slug}`}
                        className={category.color}
                      >
                        - {category.name}
                      </a>
                    </li>
                  );
                } else {
                  return (
                    <li key={category.slug}>
                      <a href={`/${category.slug}`} >
                        {category.name}
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div id="main-page">{mainComponent}</div>
        <div id="nav-right"></div>
      </div>
    </>
  );
};

export default Layout