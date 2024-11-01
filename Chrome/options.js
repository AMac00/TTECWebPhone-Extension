

// Onload pull optons from chrome.storage
function load_options(){
  chrome.storage.get("autologin",(data) => {
    console.log(data)
  })
}


// Saves options to chrome.storage
function save_options() {
  var autologin = document.getElementById('autologin').checked;
  var ext = document.getElementById('ext').value;
  var finesse_ma_enable = document.getElementById('finesse_ma_enable').checked;
  var finesse_ma_mode = document.getElementById('finesse_ma_mode').value;
  var finesse_ma_dialnum = document.getElementById('finesse_ma_dialnum').value;
  chrome.storage.sync.set({
    autologin: autologin,
    ext: ext,
    finesse_ma_enable: finesse_ma_enable,
    finesse_ma_mode: finesse_ma_mode,
    finesse_ma_dialnum: finesse_ma_dialnum,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    autologin: true,
    ext: '1005550007',
    finesse_ma_enable: true,
    finesse_ma_mode: 'CALL_BY_CALL',
    finesse_ma_dialnum: '1025550007',
  }, function(items) {
    document.getElementById('autologin').value = items.checked;
    document.getElementById('ext').value = items.ext;
    document.getElementById('finesse_ma_enable').checked = items.finesse_ma_enable;
    document.getElementById('finesse_ma_mode').checked = items.finesse_ma_mode;
    document.getElementById('finesse_ma_dialnum').checked = items.finesse_ma_dialnum;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);