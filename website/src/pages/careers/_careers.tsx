import React, { useState, useEffect } from "react"
import { Switch, Route, useRouteMatch } from '@docusaurus/router'
import Link from '@docusaurus/Link'
import Head from '@docusaurus/Head'

import Layout from "@theme/Layout"
import common from "../../css/common.module.css"
import styles from "./careers.module.css"
import InterviewProcess from "../../components/interview-process/interview-process"
import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react"
import { partial } from "../../../../../../../../../root/.cache/typescript/4.5/node_modules/@types/lodash";

type JobPosistion = {
  id: string,
  name: string,
  location: string,
  schedule: string,
  jobDescriptions: string[],
}


const fetchAllPositions = async (): Promise<JobPosistion[]> => {
  const res = await fetch('https://wgtwo-jobs.personio.de/xml')
  const resBody = await res.text()
  const parser = new DOMParser()
  const xml = parser.parseFromString(resBody, "text/xml")

  return Array.from(xml.querySelectorAll("position")).map((p, i) => ({
    name: p.querySelector("name").innerHTML,
    schedule: p.querySelector("schedule").innerHTML,
    location: p.querySelector("office").innerHTML,
    id: p.querySelector("id").innerHTML,
    jobDescriptions: Array.from(p.querySelectorAll("jobDescription")).map(el => el.innerHTML),
  }))
}

const JobPosting = ({ jp }: { jp: JobPosistion }) => <Link
  className={styles.job}
  to={`/careers/job/${jp.id}`}
>
  <div className="position-text">
    <div className={styles.jobName}>{jp.name}</div>
    <div className={styles.jobLocation}>
      {
        `Permanent employee, ${jp.schedule} - ${jp.location}`
      }
    </div>
  </div>
  <div>
    <ArrowRight />
  </div>
</Link>

const Job = ({ match, jobPostings }: { match: any, jobPostings: JobPosistion[] }) => {
  const jobPosting = jobPostings.find((j) => j.id == match.params.id)
  const cleanCDATA = text => text.replace("<![CDATA[", "").replace("]]>", "")
  return jobPosting
    ? <>
      <Link to="/careers"><ArrowLeft /></Link>,
      <div dangerouslySetInnerHTML={{ __html: jobPosting.jobDescriptions.map(cleanCDATA).join("") }} />,
      <a
        href={`https://wgtwo.jobs.personio.de/job/${jobPosting.id}#apply`}
        className={`${common.button} ${common.buttonPrimary}`} target="_blank">
        Apply now
      </a>
    </>
    : <h1>404 - Not found</h1>
}


const Careers = ({ jobPostings }: { jobPostings: JobPosistion[] }) => <div className={styles.jobs}>
  <div className={common.title}>Careers</div>
  {jobPostings.map((jp) => <JobPosting jp={jp} key={jp.id} />)}
  <div id="personio-ads"></div>
</div>

export default () => {
  const [jobPostings, setJobPostings] = useState<JobPosistion[]>([])
  useEffect(() => {
    (async () => {
      const jobPostings = await fetchAllPositions()
      setJobPostings(jobPostings)
    })()
  }, [])
  const match = useRouteMatch()

  return <Layout title="Careers">
    <Head>
      <link rel="preload" href="https://wgtwo-jobs.personio.de/xml" as="fetch" crossOrigin="anonymous" />
    </Head>
    <div className={common.section}>
      <div className={common.container}>
        <div className={common.container}>
          {
            jobPostings.length
              ? <Switch>
                <Route exact path={match.path} component={() => <Careers jobPostings={jobPostings} />} />
                <Route path={`${match.path}job/:id`} component={({ match }) => <Job jobPostings={jobPostings} match={match} />} />
              </Switch>
              : <Loader2 className={styles.loader} />
          }
        </div>
      </div>
    </div>
    <InterviewProcess />
  </Layout>

}