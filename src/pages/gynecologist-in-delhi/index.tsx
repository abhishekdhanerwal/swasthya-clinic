import Head from "next/head";
import { Button } from "@mui/material";

import { PageHeading } from "@/components/page-heading";
import { useFonts } from "@/hooks/useFonts";
import { DATA } from "@/constants/data";

import css from "./index.module.css";

export default function GynecologistInDelhi() {
  const { roboto, openSans } = useFonts();

  return (
    <>
      <Head>
        <title>
          Best Gynecologist in Delhi | PCOS, Pregnancy & Infertility Specialist
          | Dr Sonia Malik
        </title>
        <meta
          name="description"
          content="Looking for the best gynecologist in Delhi? Dr Sonia Malik offers expert care for PCOS, pregnancy, infertility & women's health. Book your appointment today."
        />
      </Head>
      <PageHeading title="Best Gynecologist in Delhi" />
      <div className={css.mainContainer}>
        <p className={roboto.className}>
          If you are searching for a trusted and experienced gynecologist in
          Delhi, Dr Sonia Malik offers expert care for a wide range of women’s
          health concerns. From PCOS treatment and pregnancy care to infertility
          solutions and menstrual disorders, she provides personalized and
          compassionate care tailored to every patient. Conveniently located
          near Mahipalpur and Vasant Kunj, the clinic is easily accessible for
          patients across South Delhi and nearby areas.
        </p>

        <div className={css.sectionContainer}>
          <h2 className={openSans.className}>
            Comprehensive Women’s Healthcare Services in Delhi
          </h2>
          <p className={roboto.className}>
            Dr Sonia Malik specializes in diagnosing and treating various
            gynecological conditions. Whether you are dealing with irregular
            periods, hormonal imbalance, or planning a pregnancy, you can expect
            evidence-based treatment and guidance.
          </p>
        </div>

        <ul className={roboto.className}>
          <li>PCOS and hormonal disorder treatment</li>
          <li>Pregnancy care and antenatal checkups</li>
          <li>Infertility evaluation and treatment</li>
          <li>Menstrual problems and irregular periods</li>
          <li>Vaginal infections and discharge issues</li>
          <li>Menopause and hormonal management</li>
        </ul>

        <div className={css.sectionContainer}>
          <h2 className={openSans.className}>
            PCOS, Pregnancy & Infertility Specialist in Delhi
          </h2>
          <p className={roboto.className}>
            PCOS is one of the most common conditions affecting women today. Dr
            Sonia Malik provides structured treatment plans including lifestyle
            changes, medication, and long-term monitoring. For couples trying to
            conceive, early diagnosis and proper treatment can significantly
            improve success rates.
          </p>
          <p className={roboto.className}>
            Pregnancy care includes regular monitoring, ultrasound guidance,
            nutritional advice, and support throughout all trimesters to ensure
            a healthy mother and baby.
          </p>
        </div>

        <div className={css.sectionContainer}>
          <h2 className={openSans.className}>
            Why Choose Dr Sonia Malik – Trusted Gynecologist in Delhi
          </h2>

          <ul className={roboto.className}>
            <li>Experienced and qualified gynecologist</li>
            <li>Personalized treatment approach</li>
            <li>Advanced diagnostic support</li>
            <li>Convenient location near Mahipalpur & Vasant Kunj</li>
            <li>Patient-focused and compassionate care</li>
          </ul>
        </div>

        <div className={css.sectionContainer}>
          <h2 className={openSans.className}>Gynecologist Near You in Delhi</h2>
          <p className={roboto.className}>
            If you are looking for a gynecologist near Mahipalpur, Vasant Kunj,
            South Delhi, or nearby areas, Dr Sonia Malik’s clinic is easily
            accessible. Many patients search for “gynecologist near me” or “best
            gynae in Delhi,” and choosing the right doctor ensures proper
            diagnosis and treatment.
          </p>
        </div>

        <div className={css.sectionContainer}>
          <h2 className={openSans.className}>Clinic Location</h2>
          <div className={css.map}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5579.673754423726!2d77.11974365129745!3d28.542559489166102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df26a87c8cd%3A0x33e5b2094e0ead27!2sDr.%20Sonia%20Malik!5e0!3m2!1sen!2sin!4v1774892047020!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className={css.faqContainer}>
          <h2 className={openSans.className}>Frequently Asked Questions</h2>

          <h3 className={openSans.className}>
            When should I visit a gynecologist?
          </h3>
          <p className={roboto.className}>
            You should visit a gynecologist if you experience irregular periods,
            pain, unusual discharge, or are planning pregnancy.
          </p>

          <h3 className={openSans.className}>Can PCOS be treated?</h3>
          <p className={roboto.className}>
            PCOS cannot be completely cured but can be effectively managed with
            proper treatment and lifestyle changes.
          </p>

          <h3 className={openSans.className}>
            Is it normal to have white discharge?
          </h3>
          <p className={roboto.className}>
            Normal white discharge is common, but if it has a foul smell or
            causes itching, consult a doctor.
          </p>

          <h3 className={openSans.className}>
            How often should I visit a gynecologist?
          </h3>
          <p className={roboto.className}>
            It is recommended to visit at least once a year or whenever you
            notice unusual symptoms.
          </p>
        </div>

        <div className={css.sectionContainer}>
          <h2 className={openSans.className}>
            Book Appointment with Best Gynecologist in Delhi
          </h2>
          <p className={roboto.className}>
            If you are facing any women’s health issues or need expert
            consultation, don’t delay seeking medical advice. Early diagnosis
            can prevent complications and ensure better treatment outcomes.
          </p>
          <div className={css.btnGroup}>
            <Button
              variant="outlined"
              onClick={() => {
                window.location.href = `https://wa.me/${DATA.number}`;
              }}
            >
              Book Appointment Now - Whatsapp
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                window.location.href = `tel:${DATA.number}`;
              }}
            >
              Book Appointment Now - Call
            </Button>
          </div>
        </div>
        {/*
         */}
      </div>
    </>
  );
}
