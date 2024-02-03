const getLocalStorage = ()=>{
    const jobApplication = localStorage.getItem('job-application')
    return jobApplication
}

export default getLocalStorage ;