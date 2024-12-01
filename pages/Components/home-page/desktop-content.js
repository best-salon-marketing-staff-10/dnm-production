import Button1 from '../buttons/button-1.js';
import TimeSchedule from '/pages/Components/time-schedule/time-schedule.js';
import Location from '/pages/Components/location/location';
import CustomerReview from '/pages/Components/customer-review.js';
import DongVien1 from '/pages/Components/dong-vien/dong-vien-1.js';
import DongVien2 from '/pages/Components/dong-vien/dong-vien-2.js';
import DongVien3 from '/pages/Components/dong-vien/dong-vien-3.js';
import Service1 from '/pages/services/service-1.js';
import Service2 from '/pages/services/service-2.js';
import Service3 from '/pages/services/service-3.js';
import Service4 from '/pages/services/service-4.js';
import Service5 from '/pages/services/service-5.js';
import Service6 from '/pages/services/service-6.js';
import Service7 from '/pages/services/service-7';
import NhanManh1 from '/pages/Components/dong-vien/nhan-manh-1';
import NhanManh2 from '/pages/Components/dong-vien/nhan-manh-2';
import NhanManh3 from '/pages/Components/dong-vien/nhan-manh-3';
import NhanManh4 from '/pages/Components/dong-vien/nhan-manh-4';
import Offers from '/pages/Components/offers/offers';
import { imageAlt } from '/pages/core/info';
import { pageContent } from '/pages/core/info';
import { images } from '/pages/core/info';

export default function DesktopContent() {
    return (
        <>
            <div className="desktop-content">
                <div className="desktop-title-1">
                    The Daw we use
                </div>
                <div className="dv">
                    <div className="khoi-left">
                        <img className="anh" src="logo.png" width="150px" />
                        <p className="content">
                            FL STUDIO
                            <br />
                            <span className="description-left">
                                SIGNATURE BUNDLE
                            </span>
                        </p>

                    </div>
                    <div className="khoi-center">
                        <img className="anh-2" src="logo.png" width="200px" />
                        <p className="content">
                            FL STUDIO
                            <br />
                            <span className="description-center">
                                ALL PLUGINS EDITION
                            </span>
                        </p>

                    </div>
                    <div className="khoi-right">
                        <img className="anh" src="/logo.png" width="150px" />
                        <p className="content">
                            FL STUDIO
                            <br />
                            <span className="description-right">
                                PRODUCER EDITION
                            </span>
                        </p>
                    </div>
                </div>
                <div className="desktop-title-2">
                    Free Cymatics Starter Pack
                </div>
                <div className="cymatics">
                    <div className="cymatic-1">
                        <img src="https://cymatics.fm/cdn/shop/products/House_16bba520-71a1-405f-ab4f-3ee7b9859866_940x1530.png?v=1571716128" width="200px" />
                    </div>
                    <div className="cymatic-2">
                        <img src="https://cymatics.fm/cdn/shop/products/min-free-trap-starter-pack_940x1530.png?v=1618931511" width="200px" />
                    </div>
                    <div className="cymatic-3">
                        <img src="https://cdn.shopify.com/s/files/1/0129/7698/0032/files/Paradox_1.webp?v=1683645613" width="200px" />
                    </div>

                </div>
            </div>

        </>
    )
}