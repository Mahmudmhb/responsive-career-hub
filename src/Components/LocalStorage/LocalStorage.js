const getLocalStorage = ()=>{
    const jobApplication = localStorage.getItem('job-application')
    if(jobApplication){
        return JSON.parse(jobApplication);
    }
    
    return []
}
const saveLocalStorage = id =>{
    const storedJobApplycations = getLocalStorage();
    const exists = storedJobApplycations.find(jobId => jobId === id)
    if(!exists){
        storedJobApplycations.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplycations))
    }

}

export  {getLocalStorage, saveLocalStorage} ;