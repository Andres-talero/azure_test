import React, {useState} from "react";
import {
  ContenedorFormulario,
  Header,
  Titulo,
  Form,
  Input,
  ContenedorInput,
  BotonSubir,
  Boton
} from "./../Elementos/ElementosFormulario";
import $ from "jquery";
import {BlobServiceClient} from "@azure/storage-blob";
import Alerta from '../Elementos/Alerta';


const Formulario = () => {

    const [fileLoad, changeFileLoad] = useState("");
    const [disableButton, setDisableButton] = useState(true);
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});


    const validate = async (e) => {
        let file = document.getElementById("file").value,
          extension = file.substring(file.lastIndexOf("."), file.length);
        if (
          document
            .getElementById("file")
            .getAttribute("accept")
            .split(",")
            .indexOf(extension) < 0
        ) {
          let valorFile = document.getElementById("file");
          valorFile.value = "";
          cambiarAlerta({tipo: 'error', mensaje: `No se aceptan archivos de tipo ${extension}`});
          cambiarEstadoAlerta(true);
        } else {
            console.log("hola")
          const file = e.target.files[0];
          setDisableButton(false);
          changeFileLoad(file);
        }
    };

    $(document).ready(function () {
        $("form").on("change", "#file", function () {
          var fileName = this.files[0].name;
          var ext = fileName.split(".");
    
          ext = ext[ext.length - 1];
          if (ext === "png" || ext === "jpg" || ext === "jpeg" || ext === "svg" || ext === "PNG" || ext === "JPG" || ext === "JPEG" || ext === "SVG") {
            $(this)
              .parent("#file-upload")
              .attr(
                "data-text",
    
                $(this)
                  .val()
                  .replace(/.*(\/|\\)/, "")
              );
          } else {
            $(this)
              .parent("#file-upload")
              .attr("data-text", "Seleccione el archivo");
          }
        });
      });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const storegaAccountName = "azuretest1crea";
        const sasToken = "?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2023-05-07T04:27:54Z&st=2022-04-12T20:27:54Z&spr=https&sig=NPCQaYcBNVIAIX4VYYby5mvhCQZzpi4lSanJL6FZ41c%3D";

        const blobService = new BlobServiceClient(
            `https://${storegaAccountName}.blob.core.windows.net?${sasToken}`
        );

        const containerClient = blobService.getContainerClient('imagen');
        // await containerClient.createIfNotExists(
        //     {
        //         access: 'container',
        //     }
        // );

        const blockBlobClient = containerClient.getBlockBlobClient(fileLoad.name);

        console.log(blockBlobClient);

        const options = {blobHTTpHeaders: { blobContentType: fileLoad.type }};

        //subir archivo al blob
        await blockBlobClient.uploadBrowserData(fileLoad, options);

        deleteNameFile();

        cambiarAlerta({tipo: 'exito', mensaje: 'Se subio la imagen correctamente.'});
        cambiarEstadoAlerta(true);

        setDisableButton(true);

    };

    const deleteNameFile = () => {
        let valorFile = document.getElementById("file").parentNode;
        valorFile.dataset.text = "Seleccionar archivo";
      };
    


  return (
    <>
      <ContenedorFormulario>
          <Header>
            <Titulo>Formulario Imagen</Titulo>
            <Boton to="/lista">Ver imagenes</Boton>
          </Header>
        <Form className="form" onSubmit={handleSubmit}>
            <ContenedorInput id="file-upload"  data-text="Seleccione su imagen">
                <Input
                    type="file"
                    accept=".png, .jpg, .JPG, .jpeg, .svg, .PNG"
                    id="file"
                    name="file-upload-field"
                    onChange={(e) => validate(e)}
                />
          </ContenedorInput>
          <BotonSubir disabled={disableButton} type="submit" className="botonCarga" multiple>Subir</BotonSubir>
        </Form>
      </ContenedorFormulario>

      <Alerta 
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
        />
    </>
  );
};

export default Formulario;
