import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from './About.module.scss';
import { Button } from "../../components";

const About = () => {
  return (
    <div className={styles.about}>
      <div className='stars'></div>
      <div className={styles.heroImg}>
        <div className={styles.desktop}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1657006160/kolob_hrmy1j.jpg"
            layout="responsive"
            alt="me hiking in Zion National Park"
            width="1902"
            height="1047" />
        </div>
        <div className={styles.mobile}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1657006160/kolob_hrmy1j.jpg"
            layout="fill"
            alt="me hiking in Zion National Park"
            objectFit="cover" />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.pageHeading}>
          <h1 className={styles.pageTitle}>about me</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.paragraph}>
            Hi! My name&#39;s Austin. I&#39;m a passionate artist, designer, and developer, born and raised in Hartford, Connecticut, and currently living in Richmond, Virginia.
          </div>

          <div className={styles.paragraph}>
            I&#39;ve been drawing for as long as I can remember and have always loved anything that revolves around creativity. I began basking in the glory of Adobe&#39;s Creative Suite when I was in sixth grade, and haven&#39;t stopped since. Once I had the technical skills of art and design down, I was looking for another fun, creative challenge and stumbled into the world of development.
          </div>

          <div className={styles.paragraph}>
            I currently work for an NFT Marketplace called <a href="https://niftys.com/" rel="noreferrer" target="_blank">Nifty&#39;s</a> as a Product Designer and React Developer and I&#39;m loving it. Prior to that, I was an Experience Developer at Primacy, a digital marketing agency based out of WPB. And just before that, I worked for Travelers Insurance as a Graphic Designer on their creative services team.
          </div>

          <div className={styles.paragraph}>
            Aside from drawing, designing, and developing, I like to spend my free time with my beautiful girlfriend, writing and listening to music, hiking, hanging with my pup - Fiz and our bunnies - Bella, Bear, and Rosie, or just hanging out waiting for some type of inspiration to strike (plus the not-so-occasional binge watching).
          </div>
        </div>
        <div className={styles.actions}>
          <Button url="https://res.cloudinary.com/austinmel/image/upload/v1657041221/Resume-AustinMelendez_r58cgg.pdf" external label="view my resume" />
          <Button url="/blog" label="more about me" secondary />
        </div>
      </div>
    </div>
  );
}

export default About;