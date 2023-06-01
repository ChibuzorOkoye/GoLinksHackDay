
const token = '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'
const username = 'chibuzorokoye'

// console.log(token)

function getforkCount(gitHubData) //gets fork data
{
    let forkCount = 0

    for ( i = 0; i < gitHubData.length; i ++)
    {
         forkCount = forkCount + parseInt(gitHubData[i].forks_count)
        
    }
    console.log(forkCount)
}

function getstarCount(gitHubData) // gets stargazers data
{
    let starCount = 0
    for ( i = 0; i < gitHubData.length; i ++)
{
    starCount = starCount + parseInt(gitHubData[i].stargazers_count)
    
}
console.log(starCount)

}

function getSize(gitHubData) //calculates the size of the repos
{
    let avgsize = 0;
    for (i = 0; i<gitHubData.length; i++)
    {
        avgsize = avgsize + parseInt(gitHubData[i].size)
    }
    avgsize = Math.round(avgsize/gitHubData.length)

    if (avgsize <= 100)
    {
        console.log(avgsize + ' KB')
    }
    else if (avgsize >= 1000)
    {
        console.log(avgsize + ' MB')
    }
    else if (avgsize >= 10000)
    {
        console.log(avgsize + ' GB')
    }
    
    else
    console.log(avgsize)
}


function getRepos(gitHubData) //gets the total amount of repos
{
    let repoCount = gitHubData.length

    console.log(repoCount)
}

function getlanguages(gitHubData)
{

}


const fetchUserData  = async () => // fetches the data from the api

{   
    let name;
    let userData = []

     const res = await fetch (`https://api.github.com/users/${username}`,
     {
        headers :
        {
            'Authorization': `token ${token}`
        }
    }
    
    ).then((response) => 
    {
        return response.json()
    }
      ).then(data =>
        userData = data
)

        name = userData.name
        console.log(name)//my name comes up as null
        console.log(userData.login)

}



const fetchRepoData  = async () => // fetches the data from the api

{   
    let gitHubData = []

     const res = await fetch (`https://api.github.com/users/${username}/repos`,
     {
        headers :
        {
            'Authorization': `token ${token}`
        }
    }
    
    ).then((response) => 
    {
        return response.json()
    }
      ).then(data =>
        gitHubData = data

    
        
)

// const user = await fetch(`https://api.github.com/users/${username}/repos`).then((response) => 
// {
//     return response.json()
// }
//   ).then(data =>
//     name = data.name
    
//   )
getforkCount(gitHubData)
getstarCount(gitHubData)
getlanguages(gitHubData)
getSize(gitHubData)


console.log(gitHubData[6].language)
// console.log(gitHubData[0].name)
// console.log(gitHubData[0].size)

    
}


// fetchRepoData();

fetchUserData();


