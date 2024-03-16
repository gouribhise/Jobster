import { useEffect } from "react"
import Wrapper from "../assets/wrappers/JobsContainer"
import { useSelector,useDispatch } from "react-redux"
import Job from './Job';
import Loading from './Loading';
const JobsContainer=()=>{
    const{jobs,isLoading}=useSelector((store)=>store.allJobs)
    const dispatch=useDispatch()
    if(isLoading){
        return(
            <Wrapper>
                <Loading/>
            </Wrapper>
        )
    }

    if(jobs.length===0){
        return(
            <Wrapper>
                <h2>No jobs to display...</h2>
            </Wrapper>
        )
    }

    return(
        <Wrapper>
 <h5>
        Jobs Info
      </h5>
      <div className="jobs">
        {jobs.map((job)=>{
            return <Job key={job.id} {...job}/>
        })}
      </div>
        </Wrapper>
     
    )
}

export default JobsContainer