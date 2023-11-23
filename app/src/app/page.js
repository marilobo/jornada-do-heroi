import { ImageList, ImageListItem, Typography } from "@mui/material";

async function getHerois(){
  const response = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans');
  return response.json();
}

export default async function Topster() {
  const herois = await getHerois();
  return (
    <div>
      <Typography variant="h1">Heróis</Typography>
      {/* <pre>{JSON.stringify(herois,null,2)}</pre> */}
      <ImageList cols={10}>
        {herois.map((heroi) => 
        <ImageListItem key={heroi.id}>
            <img src={heroi.images.lg} />
        </ImageListItem>)};
      </ImageList>
    </div>
  );
}