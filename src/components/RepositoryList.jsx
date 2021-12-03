import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

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