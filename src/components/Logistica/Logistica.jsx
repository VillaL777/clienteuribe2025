import { RegistroLogistica } from "../RegistroLogistica/RegistroLogistica";
export function Logistica() {
  return (
    <>
      <section className="bannner"></section>

      <section className="container-my-5 text-center">
        <section className="row p-5">
          <div className="col-12 col-md-6">
            <h3>LogisticaAPP</h3>
            <img
              src="../../../src/assets/clyh74xee000v768911eucars.png"
              alt="foto"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 align-self-center shadow p-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              commodi deleniti accusantium quas non vel veritatis tempore quia
              exercitationem architecto explicabo debitis ipsa quo consequatur
              earum id, ipsum cum perferendis possimus laboriosam. Veniam quo,
              cumque sint enim, asperiores a nobis magnam rem iste impedit
              fugiat quae praesentium, consequatur quisquam fugit.
            </p>
          </div>
        </section>
      </section>

      <section className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h3>Registrate como administrador logistico</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis sint ipsam, quod quaerat iusto, cum cumque autem dicta
              rerum, laboriosam adipisci. Optio ipsa modi magni molestias.
              Quaerat maxime nesciunt repellat!
            </p>
            <RegistroLogistica></RegistroLogistica>
          </div>
        </div>
      </section>
    </>
  );
}
