import FilterInput from "../components/filterInput";

async function getHerois(){
  const response = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
  return response.json();
}

export default async function Topster() {
  const herois = await getHerois();
  return (
    <div>
      <FilterInput />
    </div>
  );
}