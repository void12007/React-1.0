import './Landi.css';
import { Link } from 'react-router-dom';
import Box from '../land/Box';
import Img from "../../Image/Group.svg";
import Img1 from "../../Image/Algoduck 2.png";
import Img2 from "../../Image/Algoduck3.png";
import Img3 from "../../Image/banana1.png";
import Img4 from "../../Image/banana2.png";
import Img5 from "../../Image/banana3.png";
import Img6 from "../../Image/warlord.png";
import Img7 from "../../Image/Algo-img.svg";
import Img8 from "../../Image/arrow.svg";
import Img9 from "../../Image/Coining.png";
import Img10 from "../../Image/dragon.png";
import Img11 from "../../Image/Coining.png";
import Img12 from "../../Image/Angry monkey.png";
import Img13 from "../../Image/Cool Duck.png";
import Img14 from "../../Image/Super Tiger.png";
import Img15 from "../../Image/Circle-icon.svg";
import Img17 from "../../Image/menu-svgrepo-com.svg";
import Img18 from "../../Image/Love.svg";
import Img19 from "../../Image/icon-park_twitter.svg";
import Img20 from "../../Image/logos_telegram.svg";
import Img21 from "../../Image/medium-icon.svg";
import Img22 from "../../Image/logos_reddit-icon.svg";
import Img23 from "../../Image/logos_discord-icon.svg";
import Img24 from "../../Image/akar-icons_instagram-fill.svg";
import Img25 from "../../Image/apple-store.svg";
import Img26 from "../../Image/google-play.svg";
import Img16 from "../../Image/Simon1.png";
import Img27 from "../../Image/Simon2.png";
import Img28 from "../../Image/Simon3.png";
import Img29 from "../../Image/Simon4.png";
import Img30 from "../../Image/Simon5.png";



function Landi() {
  return (
    <div>
      <nav>
            <img src={Img} alt="logo"/>
            <div>
                <ul class="nav-links">
                    <li> <Link href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj66-Xr9t_8AhV9U6QEHRjMAN8QPAgI">Profile</Link></li>
                    <li><Link href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj66-Xr9t_8AhV9U6QEHRjMAN8QPAgI">Activity</Link></li>
                    <li><Link href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj66-Xr9t_8AhV9U6QEHRjMAN8QPAgI">Help</Link></li>
                </ul>
                <input type="text" placeholder="Search Collections, users, items"/>
                <button>Sign In</button>
            </div>
            <span class="menu-icon">M</span>
        </nav>

        <div class="header-images">
            <div>
                <p>NISHA PIG NFT</p>
            </div>
            <div>
                <p>Pixel spunky</p>
            </div>
            <div>
                <p>Shredded Apes</p>
            </div>
            <div>
                <p>Super NFT</p>
            </div>
            <div>
                <p>Red Ape</p>
            </div>
            <div>
                <p>Standard Disk NFT</p>
            </div>
            <div>
                <p>Pixel Duck</p>
            </div>
            
        </div>
    

    
        <section class="section-1">
            <div class="trending">
                <h2>Trending on <span>KAALIFA</span></h2>
                <p>Top collection by price</p>
            </div>
            <div class="trending-coins">
                <Box/>
                
                <div>
                    <img src={Img1} alt=""/>
                    <p class="trending-coin-title">Pixelated AlgoDuck</p>
                    <p class="price">1200 Algo</p>
                    <p class="percentage">4.82%</p>
                </div>
                <div>
                    <img src={Img2} alt=""/>
                    <p class="trending-coin-title">Pixelated AlgoDuck</p>
                    <p class="price">1200 Algo</p>
                    <p class="percentage">4.82%</p>
                </div>
            </div>
            <div class="trending-coin-grid">
                <div>
                    <img src={Img3} alt=""/>
                    <div class="price-name">
                        <p>BananaNFT</p>
                        <p>9800Algo</p>
                    </div>
                    <p>16.2%</p>
                </div>

                <div>
                    <img src={Img4} alt=""/>
                    <div class="price-name">
                        <p>BananaNFT</p>
                        <p>9800Algo</p>
                    </div>
                    <p>16.2%</p>
                </div>

                <div>
                    <img src={Img5} alt=""/>
                    <div class="price-name">
                        <p>BananaNFT</p>
                        <p>9800Algo</p>
                    </div>
                    <p>16.2%</p>
                </div>

                <div>
                    <img src={Img6} alt=""/>
                    <div class="price-name">
                        <p>BananaNFT</p>
                        <p>9800Algo</p>
                    </div>
                    <p>16.2%</p>
                </div>
            </div>
        </section>

        <section class="section-2">
            <h2>All Time Best Collections</h2>
            <div class="collection-grid">
                <article>
                    <div class="background">
                        <img src={Img6} alt=""/>
                        <p>WarLord NFT</p>
                    </div>
                    <div class="coin-info">
                        <div>
                            <img src={Img8} alt=""/>
                            <div>
                                <p>Price</p>
                                <p>11.8K</p>
                            </div>
                            <p>16.2%</p>
                        </div>
                        <img src={Img9} alt=""/>
                    </div>
                </article>
                
                <article>
                    <div class="background">
                        <img src={Img10} alt=""/>
                        <p>Cool Dragon</p>
                    </div>
                    <div class="coin-info">
                        <div>
                            <img src={Img7} alt=""/>
                            <div>
                                <p>Price</p>
                                <p>11.8K</p>
                            </div>
                            <p>16.2%</p>
                        </div>
                        <img src={Img8} alt=""/>
                    </div>
                </article>
                <article>
                    <div class="background">
                        <img src={Img11} alt=""/>
                        <p>Coining NFT</p>
                    </div>
                    <div class="coin-info">
                        <div>
                            <img src={Img7} alt=""/>
                            <div>
                                <p>Price</p>
                                <p>11.8K</p>
                            </div>
                            <p>16.2%</p>
                        </div>
                        <img src={Img8} alt=""/>
                    </div>
                </article>
                <article>
                    <div class="background">
                        <img src={Img12} alt=""/>
                        <p>Angry Monkey</p>
                    </div>
                    <div class="coin-info">
                        <div>
                            <img src={Img7} alt=""/>
                            <div>
                                <p>Price</p>
                                <p>11.8K</p>
                            </div>
                            <p>16.2%</p>
                        </div>
                        <img src={Img8} alt=""/>
                    </div>
                </article>
                <article>
                    <div class="background">
                        <img src={Img13} alt=""/>
                        <p>Cool Duck</p>
                    </div>
                    <div class="coin-info">
                        <div>
                            <img src={Img7} alt=""/>
                            <div>
                                <p>Price</p>
                                <p>11.8K</p>
                            </div>
                            <p>16.2%</p>
                        </div>
                        <img src={Img8} alt=""/>
                    </div>
                </article>
                <article>
                    <div class="background">
                        <img src={Img14} alt=""/>
                        <p>Super Tiger</p>
                    </div>
                    <div class="coin-info">
                        <div>
                            <img src={Img7} alt=""/>
                            <div>
                                <p>Price</p>
                                <p>11.8K</p>
                            </div>
                            <p>16.2%</p>
                        </div>
                        <img src={Img8} alt=""/>
                    </div>
                </article>
            </div>
            <Link href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj66-Xr9t_8AhV9U6QEHRjMAN8QPAgI">Explore all collections</Link>
        </section>

        <section class="section-3">
            <h2>Hot Bid🔥</h2>
            <div class="section-3-grid-container">
                <article>
                    <div>
                        <img src={Img15} alt=""/>
                        <img src={Img17} alt=""/>
                    </div>
                    <img src={Img16} alt=""/>
                    <div>
                        <p>Simon#4569</p>
                        <p>120 Algos 1/1</p>
                    </div>
                    <div class="buy-now">
                        <p><Link href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwj66-Xr9t_8AhV9U6QEHRjMAN8QPAgI">Buy now</Link></p>
                        <p><img src={Img18} alt=""/> 300</p>
                    </div>
                </article>
                <article>
                    <div>
                        <img src={Img15} alt=""/>
                        <img src={Img17} alt=""/>
                    </div>
                    <img src={Img27} alt=""/>
                    <div>
                        <p>Simon#4569</p>
                        <p>120 Algos 1/1</p>
                    </div>
                    <div class="buy-now">
                        <p>Buy now</p>
                        <p><img src={Img18} alt=""/> 300</p>
                    </div>
                </article>
                <article>
                    <div>
                        <img src={Img15} alt=""/>
                        <img src={Img17} alt=""/>
                    </div>
                    <img src={Img28} alt=""/>
                    <div>
                        <p>Simon#4569</p>
                        <p>120 Algos 1/1</p>
                    </div>
                    <div class="buy-now">
                        <p>Buy now</p>
                        <p><img src={Img18} alt=""/> 300</p>
                    </div>
                </article>
                <article>
                    <div>
                        <img src={Img15} alt=""/>
                        <img src={Img17} alt=""/>
                    </div>
                    <img src={Img29} alt=""/>
                    <div>
                        <p>Simon#4569</p>
                        <p>120 Algos 1/1</p>
                    </div>
                    <div class="buy-now">
                        <p>Buy now</p>
                        <p><img src={Img18} alt=""/> 300</p>
                    </div>
                </article>
                <article>
                    <div>
                        <img src={Img15} alt=""/>
                        <img src={Img17} alt=""/>
                    </div>
                    <img src={Img30} alt=""/>
                    <div>
                        <p>Simon#4569</p>
                        <p>120 Algos 1/1</p>
                    </div>
                    <div class="buy-now">
                        <p>Buy now</p>
                        <p><img src={Img18} alt=""/> 300</p>
                    </div>
                </article>
            </div>
        </section>
   

    
        <div class="grid-5">
            <div>
                <p>Join the KAAFILA Community</p>
                <div class="socials">
                    <img src={Img19} alt=""/>
                    <img src={Img20} alt=""/>
                    <img src={Img21} alt=""/>
                    <img src={Img22} alt=""/>
                    <img src={Img23} alt=""/>
                    <img src={Img24} alt=""/>
                </div>
            </div>
            <div>
                <p>Download the KAAFILA mobile app to explore NFTs and Tokens </p>
                <div class="apps">
                    <img src={Img25} alt=""/>
                    <img src={Img26}  alt="" class="image-2"/>
                </div>
            </div>
        </div>
        <img src={Img} alt="logo" class="image-3"/>
        <div class="bottom">
            <p>KAAFILA, ALL RIGHT RESERVED 2021-2022</p>
            <div class="line"></div>
            <p>Discover, collect and trade NFTs on Algo</p>
        </div>
    </div>
  );
}

export default Landi;
