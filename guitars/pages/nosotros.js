import React from "react";
import Image from 'next/image';
import Layout from "../components/Layout";
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

            <div className={styles.contenido}>

                <Image layout="responsive" width={600} height={450} src='/img/nosotros.jpg' alt="Imagen sobre nosotros" />

                <div>
                    <p>Nunc lacinia nibh nec tortor vehicula vulputate. In hac habitasse
                        platea dictumst. Phasellus eget bibendum mauris. Donec euismod
                        condimentum nisl, et mattis mauris. Duis finibus turpis leo, vitae
                        mollis nunc accumsan sit amet. Aliquam eu risus odio. Nam eu
                        suscipit ex, eu cursus nunc. Ut congue dictum turpis ut rutrum. Ut
                        in euismod dui. Praesent iaculis fermentum tristique. Aliquam
                        pharetra urna risus, sodales facilisis magna condimentum non. Etiam
                        euismod scelerisque sem molestie euismod.</p>

                    <p>Nunc lacinia nibh nec tortor vehicula vulputate. In hac habitasse
                        platea dictumst. Phasellus eget bibendum mauris. Donec euismod
                        condimentum nisl, et mattis mauris. Duis finibus turpis leo, vitae
                        mollis nunc accumsan sit amet. Aliquam eu risus odio. Nam eu
                        suscipit ex, eu cursus nunc. Ut congue dictum turpis ut rutrum. Ut
                        in euismod dui. Praesent iaculis fermentum tristique. Aliquam
                        pharetra urna risus, sodales facilisis magna condimentum non. Etiam
                        euismod scelerisque sem molestie euismod. Duis ullamcorper, tellus
                        ac gravida malesuada, risus nulla iaculis augue, sit amet auctor est
                        augue a ex.</p>
                </div>

            </div>

      </main>
    </Layout>
  );
};

export default Nosotros;
