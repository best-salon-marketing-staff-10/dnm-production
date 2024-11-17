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
                <div className="dv">
                    <div className="khoi">
                        <img src="/images/gel-nails-shellac-nails-3.jpg" width="300px"/>
                        <p className="content">
                            "FL Studio means everything to my productions. It’s the only program I didn’t get bored of."
                            <br />
                            <span className="name">
                                WondaGurl
                            </span>
                        </p>

                    </div>
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                </div>
            </div>

        </>
    )
}