## NAVER CLOUD PLATFORM Video Player Enhancement DEMO

미디어플러스에서 제공하는 NAVERCLOUD VPE Player의 Widevine/PlayReady/FiarPlay Multi DRM 데모 코드

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/db85e25df98bf242d0ae25724a975dd7.png)



## 소스코드
[https://github.com/SGRsoft-Dev/vpe.drm.widevine-playready.demo](https://github.com/SGRsoft-Dev/vpe.drm.widevine-playready.demo)


*** 


## 필수
- 네이버클라우드 플랫폼 Video Player Enhancement SDK URL
- 네이버클라우드 VOD Station 재생소스
- PallyCon DRM 필수
***

## 제한사항

현재 데모코드에 사용된 필수 요소들은 개발자 로컬 테스트에서만 동작합니다. (http://localhost)

네이버클라우드 플랫폼 Video Player Enhancement 유료 라이선스가 필요합니다.

해당 데모는 PallyCon DRM을 지원합니다. (https://pallycon.com)

***


## 사용자 가이드
### NAVERCLOUD PLATFORM Video Player Enhancement
https://guide.ncloud-docs.com/docs/ko/vpe-overview


### VPE DRM 가이드
https://guide.ncloud-docs.com/docs/vpe-example-auth#multidrm

### PallyCon DRM 가이드
https://pallycon.com/ko/drm-platform/


### DRM System ID 
https://dashif.org/identifiers/content_protection/


***

## VOD Station 설정 주의사항

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/bb9d8a4071ce9d0bb9d92cb5033d8e5d.png)
- VOD Station 멀티 DRM을 구현하기 위해선 2개의 채널을 생성해야합니다.
- 1개의 채널은 Widevine/PlayReady DRM을 위한 채널을 생성해야합니다.
- 1개의 채널은 FairPlay DRM을 위한 채널을 생성해야합니다.
- FairPlay DRM 채널은 HLS만 지원합니다.
- Widevine/PlayReady DRM 채널은 DASH만 지원합니다.

### Widevine/PlayReady DRM 채널 설정
![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/07b143fb4d1960fb2238c8eb53834f32.png)

- 펠리컨 대시보드 > 멀티DRM > DRM 세팅 > 사이트키 복사
- DRM System ID는 Widevine/PlayReady DRM 공통값입니다.
```
9a04f079-9840-4286-ab92-e65be0885f95
edef8ba9-79d6-4ace-a3c8-27dcd51d21ed
```
- DRM Key URL은 Widevine/PlayReady DRM 공통값입니다.
- 펠리컨 대시보드 > 멀티DRM > DRM 세팅 > KMS 토큰
```
https://kms.pallycon.com/v2/cpix/pallycon/getKey/{KMS 토큰}
```

***

### FairPlay DRM 채널 설정

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/ae71c2c94ffc5011b81064fd81aecabf.png)

- 펠리컨 대시보드 > 멀티DRM > DRM 세팅 > 사이트키 복사
- DRM System ID는 FairPlay DRM 공통값입니다.
```
94ce86fb-07ff-4f43-adb8-93d2fa968ca2
```
- DRM Key URL은 Widevine/PlayReady DRM 공통값입니다.
- 펠리컨 대시보드 > 멀티DRM > DRM 세팅 > KMS 토큰
```
https://kms.pallycon.com/v2/cpix/pallycon/getKey/{KMS 토큰}
```

***

## 실행방법

```bash
$ npm install
$ npm run dev
```

## DRM 세팅

```javascript
// src/demo.js

document.addEventListener('DOMContentLoaded',  async ()=> {

    window.drmPlayer = await ncplayerDRM('player',{
        playlist:[
            {
                drm:{
                    'com.apple.fps':{
                        src : '재생소스 HLS',
                        certificateUri: '인증서 주소',
                        licenseUri : '라이선스 URL',
                        licenseRequestHeader:{
                            'Content-type': 'application/x-www-form-urlencoded',
                            'pallycon-customdata-v2':'페어플레이 토큰'
                        }
                    },
                    'com.widevine.alpha':{
                        src : '재생소스 DASH',
                        licenseUri : '라이선스 URL',
                        licenseRequestHeader:{
                            'pallycon-customdata-v2':'와이드바인 토큰'
                        }
                    },
                    'com.microsoft.playready':{
                        src : '재생소스 DASH',
                        licenseUri : '라이선스 URL',
                        licenseRequestHeader:{
                            'pallycon-customdata-v2':'플레이레디 토큰'
                        }
                    },
                },
            },
        ],
        autostart:true,
        muted:true,
        progressBarColor:"#ff0000",
    });

});


```

***


## 문의하기


SGRSOFT 개발팀  : dev@sgrsoft.com

채널톡 : https://sgrsoft.channel.io/home

영업 및 네이버클라우드 가입 문의 : biz@sgrsoft.com

SGRSOFT를 통하여 네이버클라우드 플랫폼 크래딧을 지원 받을 수 있습니다. (최대 300만원)


미디어플러스 데모 웹사이트 :
[https://mediaplus-demo.web.app](https://mediaplus-demo.web.app)

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/851b6ea05f1fcc1cb827d841ca32346d.png)


