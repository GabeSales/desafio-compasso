import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardRepo } from "../../Components/CardRepo";
import { Repo } from "../../types/repo";

export const ViewReposPage = () => {
  const [repository, setRepository] = useState<Array<Repo> | null>(null);

  const { userName } = useParams();

  const searchRepository = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`);
    const data = await res.json();

    setRepository(data);

    // console.log("lsnjdksadmn vdkfjn", data);
  };

  // useEffect(() => {
  //   searchRepository(userName as string);
  // }, []);

  if(!repository){
    searchRepository(userName as string);
  }

  console.log("repo", repository);
  

  return (
    <div>
      <h1>Repositorios</h1>.
      <div>
        {repository &&
          repository?.map((item) => {
            return (
              <CardRepo key={item.id} repository={item} />
            );
          })}
      </div>
    </div>
  );
};
