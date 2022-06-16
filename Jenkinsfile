pipeline {
  agent any
  stages {
    stage('Mensaje inicial') {
      steps {
        echo 'Estanos cargando....'
      }
    }

    stage('Cargar directorio') {
      steps {
        ws(dir: 'D:\\Creasistemas\\Proyectos\\PBX-CREA') {
          echo 'Cragamos el directorio local'
        }

      }
    }

  }
}