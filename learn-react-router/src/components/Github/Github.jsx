import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData();
    return (
        <div className='flex justify-center gap-12 max-w-screen-lg mx-auto'>
            <img className="w-56 h-56 object-fill rounded-full" src={data?.avatar_url} alt="github-profile" />
            <div className="flex-1">
                <h1 className="text-xl mt-8">{data?.login.toUpperCase()}</h1>
                <p className="text-base">Repositories: {data?.public_repos}</p>
            </div>
        </div>
    )
}

export default Github

async function fetchGithubProfile() {
    const response = await fetch('https://api.github.com/users/astro-israfil');
    const data = await response.json();
    return data;
}

export { fetchGithubProfile }