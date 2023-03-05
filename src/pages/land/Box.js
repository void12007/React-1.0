import Image from "../../Image/Algoduck 1.png";

function Box(){

    return (
        <div>
            <img src={Image} alt=""/>
            <p class="trending-coin-title">Pixelated AlgoDuck</p>
            <p class="price">1200 Algo</p>
            <p class="percentage">4.82%</p>
        </div>
    );
}

export default Box;