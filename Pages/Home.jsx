import "../Style.css";
import Formulario from "../Pages/Form";

function Home() {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__content">
                    <h1>
                        Veja nossos produtos{" "}
                        <span className="text-highlight">
                            Ou crie o perfil do seu pet
                        </span>
                    </h1>

                    <button className="main__btn">Produtos</button>
                </div>

                <div className="main__img--container">
                    <img src="img/dogs.jpg" alt="pet" id="main__img" />
                </div>
            </div>
        </div>

    );
    
}

export default Home;