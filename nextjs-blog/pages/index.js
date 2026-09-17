import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><strong>Why I Chose My IT Specialization</strong></p> <p>I chose <strong>Cybersecurity</strong> as my IT specialization because of the growing importance of protecting digital systems, networks, and sensitive information. As organizations increasingly depend on technology, the risks associated with cyberattacks, data breaches, and other security threats continue to increase.</p> <p>I am particularly interested in cybersecurity because it combines technical problem-solving, continuous learning, and meaningful real-world impact. The constantly evolving nature of cyber threats motivates me to develop the knowledge and skills needed to identify vulnerabilities, strengthen security measures, and contribute to the protection of digital assets.</p> <p>Through this specialization, I aim to build a strong professional foundation and contribute to creating safer and more reliable digital environments for individuals and organizations.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}