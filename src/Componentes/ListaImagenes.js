import React, { useEffect, useState } from "react";
import {
  ContenedorFormulario,
  Header,
  Titulo,
  Boton,
} from "./../Elementos/ElementosFormulario";
import { BlobServiceClient } from "@azure/storage-blob";
import { ContenedorCards, Card, Imagen } from "./../Elementos/ElementosImagenes";

const ListaImagenes = () => {
  const [listaImagenes, setListaImagenes] = useState([]);

  useEffect(() => {
    const storegaAccountName = "azuretest1crea";
    const sasToken =
      "?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2023-05-07T04:27:54Z&st=2022-04-12T20:27:54Z&spr=https&sig=NPCQaYcBNVIAIX4VYYby5mvhCQZzpi4lSanJL6FZ41c%3D";

    const blobService = new BlobServiceClient(
      `https://${storegaAccountName}.blob.core.windows.net?${sasToken}`
    );

    const containerName = "imagen";

    const traerData = async () => {
      const containerClient = blobService.getContainerClient(containerName);

      const imagenes = [];

      for await (const blob of containerClient.listBlobsFlat()) {
        // if image is public, just construct URL
        imagenes.push({
            url: `https://${storegaAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
        }
        );
      }

      setListaImagenes(imagenes);
    };

    traerData();
  }, []);


  return (
    <>
      <ContenedorFormulario>
        <Header>
          <Titulo>Imagenes</Titulo>
          <Boton to="/">Agregar Imagen</Boton>
        </Header>
      <ContenedorCards className="row">
        {listaImagenes.map((imagen) => (
          <Card className="col-md-6" key={imagen.url}>
            <Imagen src={imagen.url} alt="imagen" />
          </Card>
        ))}
      </ContenedorCards>
      </ContenedorFormulario>
    </>
  );
};

export default ListaImagenes;
