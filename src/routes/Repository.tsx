import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BackBtn from "../components/BackBtn"
import Loader from "../components/Loader"
import Repos from "../components/Repos"
import styles from "../styles/Repository.module.css"
import { RepositoryProps } from "../types/repos"

const Repository = () => {
  const { username } = useParams()
  const [repos, setRepos] = useState<RepositoryProps[] | [] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const loadRepository = async function(username: string) {
      setIsLoading(true)

      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await response.json();
      console.log(data)
      setIsLoading(false)

      let orderRepository = data.sort((a: RepositoryProps, b: RepositoryProps) => a.name < b.name)

      setRepos(orderRepository)
    }

    if(username){
      loadRepository(username)
    }
  }, [])
  
  if(!repos && isLoading) return <Loader />
  return (
    <div className={styles.repository}>
      <BackBtn />
      <h2>Explore os repositórios do {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositórios</p>}
      {repos && repos.length > 0 && (
        <div>
          {repos.map((repository: RepositoryProps) => (
            <Repos key={repository.name} {...repository} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Repository