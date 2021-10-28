import React from 'react';
import Layout from '../components/layout';
import {mainInfo, mainInfoLeft, mainInfoRight, infoImage} from './info.module.css';
import DesignedBar from '../components/designedBar';

export default function InfoPage() {
    return (
        <Layout>
            <div className={mainInfo}>
                <div className={mainInfoLeft}>
                    <div className={infoImage}>
                    </div>
                </div>
                <div className={mainInfoRight}>
                    <div>홍정기</div>
                    <div>항상 끊임없이 배우는 개발자가 되고 싶습니다.</div>
                    <div>
                        <div>사용 기술</div>
                        <div>
                            HTML <DesignedBar width="100%" fraction={80} color="#F6D7A7"/>
                            CSS <DesignedBar width="100%" fraction={50} color="#F6EABE"/>
                            JavaScript <DesignedBar width="100%" fraction={35} color="#C8E3D4"/>
                            React <DesignedBar width="100%" fraction={20} color="#87AAAA"/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}