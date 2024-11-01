// Adding event listner to the js for page load. This allows for timing of the submit
window.addEventListener('load', main, false)


function main (evt) {
    console.log("TTEClogin loaded main page")
    ext = '1005550005';
    cc_username = 'rlewis';
    autologin = true;
    finesse_ma_enable = true;
    finesse_ma_mode = 'CALL_BY_CALL';
    finesse_ma_dialnum = "1025550005";
    cc_name_cookie= 'cc_username='+cc_username+'; expires=Thu, 18 Dec 2032 12:00:00 UTC; path=/;secure=true'
    ext_cookie = 'finesse_ag_extension='+ext+'; expires=Thu, 18 Dec 2032 12:00:00 UTC; path=/;secure=true'
    ma_mode_cookie ='finesse_ma_mode='+finesse_ma_mode+'; expires=Thu, 18 Dec 2032 12:00:00 UTC; path=/;secure=true'
    ma_dialnum_cookie = 'finesse_ma_dialnum='+finesse_ma_dialnum+'; expires=Thu, 18 Dec 2032 12:00:00 UTC; path=/;secure=true'
    cookies = document.cookie
    // Check for Any Cookies cookies
    if (document.cookie) {
        console.log('TTECLogin Found cookie')
        // Check for cc_username  in cookies  -- Pre-SSO login
        if (cookies.includes(cc_username)) {
            console.log("TTECLogin Found " + cc_username + ' in cookies')
            // Check for extension in cookies -- Post-SSO but submit is not available yet
            if (!cookies.includes(ext)) {
                console.log("TTECLogin Didn't find " + ext + ' in cookies')
                document.cookie = ext_cookie
                if (finesse_ma_enable === true) {
                    document.cookie = ma_mode_cookie
                    document.cookie = ma_dialnum_cookie
                }
                // Reload window with new agent information
                window.location.reload()
            }
            // Check for extnesion in cookies -- Post SSO with submit available
            else if (cookies.includes(ext)) {
                console.log("TTECLogin Found " + ext + ' in cookies, lets login')
                if (autologin === true) {
                    var sign_in = document.getElementById('signin-button')
                    if (sign_in != null ){
                        console.log("TTECLogin Found signin-button")
                        console.log(sign_in)
                        document.getElementById('signin-button').click()
                    }
                    else {
                        console.log("TTECLogin Didn't find signin-button")
                        window.location.reload()
                    }
                    // console.log("signin-button attempt 1")
                    // document.getElementById('signin-button').click()
                    // console.log("signin-button attempt 2")
                    // document.getElementById('signin-button').click()
                    // console.log("signin-button attempt 3")
                    // document.getElementById('signin-button').click()
                }
            }
        //}
        // else if (!cookies.includes(cc_username)) {
        //     console.log("Didn't find cc_name token, doesn't pass the vibe check")
        //     console.log(cookies)
        //     document.cookie = ext_cookie
        //     // Check Mobile Agent and enable required cookies
        //     if (finesse_ma_enable === true) {
        //         document.cookie = ma_mode_cookie
        //         document.cookie = ma_dialnum_cookie
        //     }
        //     //window.location.reload()
        }
        else {
                console.log("TTECLogin Found cookies but not a cc_username")
        }
    }
    else {
        console.log("TTECLogin - Didn't find any cookies. Failed login attempt")
    }
}