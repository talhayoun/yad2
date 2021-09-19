import React, { useState } from 'react';
import PublishBigAd from './PublishBigAd';
import PublishCategories from './PublishCategories';
import PublishSmallAds from './PublishSmallAds';

const PublishBody = ({onClickPublishing}) => {

    const [blackBox, setBlackBox] = useState(false);

    const onClickButton = () => {
        setBlackBox(true);
    }

    const onClickClose = () => {
        setBlackBox(false);
    }

    return (
        <div className="publishbody">
            <h2>אני רוצה לפרסם מודעה בלוח....</h2>
            <div className="publishbody-bigads">
                <PublishBigAd onClickButton={onClickButton}/>
            </div>
            <div className="publishbody-smallads">
                <PublishSmallAds />
            </div>
            <div className="publishbody-categories">
                <PublishCategories />
            </div>
            {blackBox && <div className="black-box" onClick={onClickClose}></div>}
            {blackBox && 
                <div className="publishbody-publishbox">
                    <div className="publishbody-publishbox-div">
                        <svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>8D8C02B7-E749-4809-B073-8E94E8ECB53C</title>
                        <desc>Created with sketchtool.</desc>
                        <g id="Publish-New-Ad-NADLAN" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Publish-New-Ad-CATEGORIES-popup-hover-v2" transform="translate(-603.000000, -390.000000)" fill-rule="nonzero">
                                <g id="Group-6" transform="translate(475.000000, 378.000000)">
                                    <g id="Group-7" transform="translate(115.000000, 0.000000)">
                                        <g id="Group-5" transform="translate(13.000000, 12.000000)">
                                            <g id="Group-81">
                                                <polygon id="Rectangle" fill="#FFFFFF" points="17.0664063 6 29 15.9334416 29 33 5 33 5 17"></polygon>
                                                <polygon id="Rectangle" fill="#FF7100" points="16.5 1 33 13.9411289 32 17 16.9999894 6 1.99304067 17 1 13.9411289"></polygon>
                                                <polygon id="Rectangle" fill="#CCCCCC" points="25 3 29 3 29 10 25 8"></polygon>
                                                <rect id="Rectangle" fill="#CCCCCC" x="12" y="19" width="10" height="14"></rect>
                                                <g id="house" fill="#000000">
                                                    <path d="M33.9909688,14.7081211 C33.9298086,13.912043 33.5623164,13.1876836 32.956293,12.6683867 L30.0154258,10.1476055 L30.0154258,2.9845625 C30.0154258,2.43445312 29.5694414,1.98853516 29.0193984,1.98853516 L25.0351563,1.98853516 C24.4850469,1.98853516 24.0524102,2.43451953 24.0524102,2.9845625 L24.0524102,5.02509375 L19.0114453,0.728941406 C17.8845313,-0.236539063 16.2487461,-0.23640625 15.125418,0.726085937 L1.0444375,12.6682539 C-0.200878906,13.7352695 -0.362445312,15.6182187 0.721304688,16.8832578 C1.54733203,17.8438242 2.87047656,18.1500898 3.99845313,17.7536445 L3.99845313,32.999457 C3.99845313,33.5495664 4.43115625,33.9954844 4.98119922,33.9954844 L29.019332,33.9954844 C29.5694414,33.9954844 30.0153594,33.5495 30.0153594,32.999457 L30.0153594,17.7538437 C31.1797266,18.1655625 32.4749805,17.8205156 33.2803555,16.8819297 C33.7996523,16.2757734 34.0520625,15.5037344 33.9909688,14.7081211 Z M26.0311836,3.98058984 L28.0365859,3.98058984 L28.0365859,8.44003516 L26.0311836,6.73253125 L26.0311836,3.98058984 Z M21.0641953,32.0034297 L12.9496836,32.0034297 L12.9496836,20.0216641 L21.0641953,20.0216641 L21.0641953,32.0034297 Z M23.0430352,32.0034297 L23.0430352,19.038918 C23.0430352,18.4888086 22.5970508,18.0428906 22.0470078,18.0428906 L11.9535898,18.0428906 C11.4034805,18.0428906 10.9708438,18.488875 10.9708438,19.038918 L10.9708438,32.0034297 L5.97729297,32.0034297 L5.97729297,16.3209961 L17.0633516,6.91700781 L28.0366523,16.3116992 L28.0366523,32.0034297 L23.0430352,32.0034297 Z M31.7680195,15.5851484 C31.4148711,15.9967344 30.7870664,16.0570977 30.3629961,15.693457 L17.7148633,4.85170703 C17.3433203,4.53315625 16.7954688,4.53182812 16.422332,4.84838672 C16.1527891,5.07695703 3.69085938,15.648168 3.63813281,15.6929258 C3.22096875,16.0498594 2.59010938,16.0011836 2.23291016,15.5856797 C1.8753125,15.1683164 1.92365625,14.5381875 2.33710156,14.1838437 L16.4181484,2.24160937 C16.7940078,1.91967187 17.3394688,1.91960547 17.7150625,2.24147656 L31.6599766,14.1809883 C32.076875,14.5382539 32.1251523,15.1684492 31.7680195,15.5851484 Z" id="Shape"></path>
                                                    <circle id="Oval" cx="18.5" cy="26.5" r="1.5"></circle>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    </div>
                    <p onClick={onClickClose}>X</p>
                    <h3>איזה סוג מודעה תרצו לפרסם?</h3>
                    <div>
                        <button onClick={onClickPublishing}>פרטי</button>
                        <button onClick={onClickPublishing}>מתווך</button>
                    </div>
                </div>
                }
        </div>
    );
};

export default PublishBody;