import Button1 from '/pages/Components/buttons/button-1';
import Button2 from '/pages/Components/buttons/button-2';
import TimeSchedule from '/pages/Components/time-schedule/time-schedule';
import Location from '/pages/Components/location/location';
import CustomerReview from '/pages/Components/customer-review';
import DongVien1 from '/pages/Components/dong-vien/dong-vien-1';
import DongVien2 from '/pages/Components/dong-vien/dong-vien-2';
import DongVien3 from '/pages/Components/dong-vien/dong-vien-3';
import Service1 from '/pages/services/service-1';
import Service2 from '/pages/services/service-2';
import Service3 from '/pages/services/service-3';
import Service4 from '/pages/services/service-4';
import Service5 from '/pages/services/service-5';
import Service6 from '/pages/services/service-6';
import Service7 from '/pages/services/service-7';
import NhanManh1 from '/pages/Components/dong-vien/nhan-manh-1';
import NhanManh2 from '/pages/Components/dong-vien/nhan-manh-2';
import NhanManh3 from '/pages/Components/dong-vien/nhan-manh-3';
import NhanManh4 from '/pages/Components/dong-vien/nhan-manh-4';
import Offers from '/pages/Components/offers/offers';
import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import { images } from '/pages/core/info';

export default function MobileContent() {
    return (
        <>
            <div className="mobile-content">
                <div className="mobile-title-1">
                    The Daw we use
                </div>
                <div className="dv">
                    <div className="khoi-left">
                        <img className="anh" src="logo.png"  />
                        <p className="content">
                            FL STUDIO
                            <br />
                            <span className="description-left">
                                SIGNATURE BUNDLE
                            </span>
                        </p>
                    </div>
                    <div className="khoi-center">
                        <img className="anh-2" src="logo.png" />
                        <p className="content">
                            FL STUDIO
                            <br />
                            <span className="description-center">
                                ALL PLUGINS EDITION
                            </span>
                        </p>
                    </div>
                </div>
                <div className="khoi-right">
                        <img className="anh" src="/logo.png"  />
                        <p className="content">
                            FL STUDIO
                            <br />
                            <span className="description-right">
                                PRODUCER EDITION
                            </span>
                        </p>
                    </div>
                <div className="mobile-title-2">
                    Free Cymatics Starter Pack
                </div>
                <div className="cymatics">
                    <div className="cymatic-1">
                        <img className="img-cymatics" src="https://cymatics.fm/cdn/shop/products/House_16bba520-71a1-405f-ab4f-3ee7b9859866_940x1530.png?v=1571716128"  />
                    </div>
                    <div className="cymatic-2">
                        <img className="img-cymatics" src="https://cymatics.fm/cdn/shop/products/min-free-trap-starter-pack_940x1530.png?v=1618931511"  />
                    </div>
                    <div className="cymatic-3">
                        <img className="img-cymatics-2" src="//cymatics.fm/cdn/shop/products/new-cobra_940x1530.png?v=1591646132"  />
                    </div>

                </div>
                <div className="video">
                    <div className="mobile-title-2">
                        Our lesson sample
                    </div>
                    <iframe
                        className="iframe"
                        src="https://www.youtube.com/embed/YNgHtG5arXo"
                        width="480" height="500"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>

        </>
    )
}