window.drmPlayer = null

document.addEventListener('DOMContentLoaded',  async ()=> {

    window.drmPlayer = await ncplayerDRM('player',{
        playlist:[
            {
                drm:{
                    'com.apple.fps':{
                        src : 'https://contents.pallycon.com/bunny/hls/master.m3u8',
                        certificateUri: 'https://license-global.pallycon.com/ri/fpsKeyManager.do?siteId=DEMO',
                        licenseUri : 'https://license-global.pallycon.com/ri/licenseManager.do',
                        licenseRequestHeader:{
                            'Content-type': 'application/x-www-form-urlencoded',
                            'pallycon-customdata-v2':'eyJrZXlfcm90YXRpb24iOmZhbHNlLCJyZXNwb25zZV9mb3JtYXQiOiJvcmlnaW5hbCIsInVzZXJfaWQiOiJ0ZXN0LXVzZXIiLCJkcm1fdHlwZSI6IkZhaXJQbGF5Iiwic2l0ZV9pZCI6IkRFTU8iLCJoYXNoIjoiY21NZkZPUExrakErbTVLZ3BKS09vVnVmRTVTc3hKdVlTUm1jUWM1dmlVUT0iLCJjaWQiOiJiaWdidWNrYnVubnkiLCJwb2xpY3kiOiJuNXgyOHVZbURkUENGaW1vTTNuR053PT0iLCJ0aW1lc3RhbXAiOiIyMDIxLTAxLTA2VDA5OjI0OjI4WiJ9'
                        }
                    },
                    'com.widevine.alpha':{
                        src : 'https://contents.pallycon.com/bunny/stream.mpd',
                        licenseUri : 'https://license-global.pallycon.com/ri/licenseManager.do',
                        licenseRequestHeader:{
                            'pallycon-customdata-v2':'eyJrZXlfcm90YXRpb24iOmZhbHNlLCJyZXNwb25zZV9mb3JtYXQiOiJvcmlnaW5hbCIsInVzZXJfaWQiOiJ0ZXN0LXVzZXIiLCJkcm1fdHlwZSI6IldpZGV2aW5lIiwic2l0ZV9pZCI6IkRFTU8iLCJoYXNoIjoiRFNEQ0JwWmhJYVR5VG1MMzlCXC9Yb2IyNzRobWpWXC9oWEp4T1V0K29hZ1pjPSIsImNpZCI6ImJpZ2J1Y2tidW5ueSIsInBvbGljeSI6Im41eDI4dVltRGRQQ0ZpbW9NM25HTnc9PSIsInRpbWVzdGFtcCI6IjIwMjEtMDEtMDZUMDk6MjI6MzZaIn0='
                        }
                    },
                    'com.microsoft.playready':{
                        src : 'https://contents.pallycon.com/bunny/stream.mpd',
                        licenseUri : 'https://license-global.pallycon.com/ri/licenseManager.do',
                        licenseRequestHeader:{
                            'pallycon-customdata-v2':'eyJrZXlfcm90YXRpb24iOmZhbHNlLCJyZXNwb25zZV9mb3JtYXQiOiJvcmlnaW5hbCIsInVzZXJfaWQiOiJ0ZXN0LXVzZXIiLCJkcm1fdHlwZSI6IlBsYXlSZWFkeSIsInNpdGVfaWQiOiJERU1PIiwiaGFzaCI6IllDRjViUE9UVHFjZWZDUnlBQks3Rnl0V21mNUJ0T3RhcGo4dVI0QXc2S1E9IiwiY2lkIjoiYmlnYnVja2J1bm55IiwicG9saWN5IjoibjV4Mjh1WW1EZFBDRmltb00zbkdOdz09IiwidGltZXN0YW1wIjoiMjAyMS0wMS0wNlQwOToyNDowN1oifQ=='
                        }
                    },
                },
                description:{
                    title:"DRM 테스트",
                    profile_name:"SGRSOFT Now17",
                    profile_image:"https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202207/ebab15d06636b21136c50d7535ca2892.jpeg",
                },

            },
        ],
        autostart:true,
        muted:true,
        progressBarColor:"#ff0000",
    });

});
