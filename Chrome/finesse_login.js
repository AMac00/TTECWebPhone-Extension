// Adding event listner to the js for page load. This allows for timing of the submit
// window.addEventListener('load', main, false)
 window.addEventListener('load', main, false)

function main (evt) {
    console.log("TTEClogin loaded main page")
    ext = '1005550007';
    cc_username = 'rlewis';
    autologin = true;
    finesse_ma_enable = true;
    finesse_ma_mode = 'CALL_BY_CALL';
    finesse_ma_dialnum = "1025550007";
    cc_name_cookie = 'cc_username=' + cc_username + '; expires=Thu, 18 Dec 2032 12:00:00 UTC; path=/;secure=true'
    ext_cookie = 'finesse_ag_extension=' + ext + '; expires=Thu, 18 Dec 2032 12:00:00 UTC; path=/;secure=true'
    ma_mode_cookie = 'finesse_ma_mode=' + finesse_ma_mode + '; expires=Thu, 18 Dec 2032 12:00:00 UTC; path=/;secure=true'
    ma_dialnum_cookie = 'finesse_ma_dialnum=' + finesse_ma_dialnum + '; expires=Thu, 18 Dec 2032 12:00:00 UTC; path=/;secure=true'
    cookies = document.cookie
    console.log("TTEClogin passed variables")
    console.log("TTECLogin - " + cc_username)
    chrome.storage.sync.get("data", function(items) {
    if (!chrome.runtime.error) {
      console.log("TTECLogin - "+items);
    }})
    if (document.cookie) {
        console.log("TTECLogin - Got cookies group")
        console.log("TTECLogin - "+cookies)
        console.log("TTECLogin - ma_mode_cookie = " + ma_mode_cookie)
        console.log("TTECLogin - ma_dialnum_cookie = " + ma_dialnum_cookie)
        console.log("TTECLogin - ext_cookie = " + ext_cookie)
        var sign_in = document.getElementById('signin-button')
        document.getElementById('signin-button').click()
        if (sign_in != null ) {
            console.log("TTECLogin Found signin-button")
            console.log(sign_in)
            document.getElementById('signin-button').click()
        }else{
           console.log("TTECLogin DID NOT Find signin-button")
        }
        //}
        // else {
        //     console.log("TTECLogin Didn't find signin-button")
        //     window.location.reload()
        // }
    }
    else {
        console.log("TTECLogin - Didn't get any Non-httponly cookies")
        // document.cookie = ma_mode_cookie
        // document.cookie = ma_dialnum_cookie
        document.cookie = ext_cookie
        // Reload window with new agent information
        window.location.reload()
    }
}
