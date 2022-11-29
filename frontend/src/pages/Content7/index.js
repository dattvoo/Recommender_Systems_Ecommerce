import "./style.css"
import "../../general/css/grid.css"
export const Content7 = () =>{
    return(
        <section className="shop-blog section">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-12">
                        <div className="section-title">
                            <h2>From Our Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col l-4 m-6 c-12">
                        <div className="shop-single-blog">
                            <img src={require("../../general/img/blog1.jpg")} alt="shoplist1" />
                            <div className="content">
                                <p className="date">22 July , 2020. Monday</p>
                                <a href="#" className="title">Sed adipiscing ornare.</a>
                                <a href="#" className="more-btn">Continue Reading</a>
                            </div>
                        </div>
                    </div><div className="col l-4 m-6 c-12">
                        <div className="shop-single-blog">
                            <img src={require("../../general/img/blog2.jpg")} alt="shoplist1" />
                            <div className="content">
                                <p className="date">22 July , 2020. Monday</p>
                                <a href="#" className="title">Sed adipiscing ornare.</a>
                                <a href="#" className="more-btn">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-6 c-12">
                        <div className="shop-single-blog">
                            <img src={require("../../general/img/blog3.jpg")} alt="shoplist1" />
                            <div className="content">
                                <p className="date">22 July , 2020. Monday</p>
                                <a href="#" className="title">Sed adipiscing ornare.</a>
                                <a href="#" className="more-btn">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
