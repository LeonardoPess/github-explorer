import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  const repository = {
    name: 'unform2',
    description: 'Forms in React',
    link: 'https://github.com/LeonardoPess/github-explorer'
  }

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  );
}