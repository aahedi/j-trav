function onLoad() {
    document.addEventListener('deviceready', onDeviceReady, false);
}        
  
function onDeviceReady(){
    //alert('device ready');
    navigator.splashscreen.hide(); 
} 
        function muat(link){
        var inAppBrowserbRef;
inAppBrowserbRef = window.open(link, '_blank', 'location=no,toolbar=no','closebuttoncaption=Return');
         inAppBrowserbRef.addEventListener('loadstart', inAppBrowserbLoadStart);
         inAppBrowserbRef.addEventListener('loadstop', inAppBrowserbLoadStop);
         inAppBrowserbRef.addEventListener('loaderror', inAppBrowserbLoadError);
         inAppBrowserbRef.addEventListener('exit', inAppBrowserbClose);
		 inAppBrowserbRef.addEventListener('offline', onOffline, false);
            
function onOffline() {
    alert('koneksi offline');
}
		 
   function inAppBrowserbLoadStart(event) {
	    
		 navigator.notification.activityStart('Mohon tunggu', 'Sedang memuat...');
         //alert(event.type + ' - ' + event.url);
		
    }
 
    function inAppBrowserbLoadStop(event) {
		 navigator.notification.activityStop();
         //alert(event.type + ' - ' + event.url);
		
    }
 
    function inAppBrowserbLoadError(event) {
	     navigator.notification.activityStop();
         //alert(event.type + ' - ' + event.message);
        inAppBrowserbRef.close();
		alert('Koneksi internet terputus');
        inAppBrowserbRef.removeEventListener('loadstart', iabLoadStart);
        inAppBrowserbRef.removeEventListener('loadstop', iabLoadStop);
        inAppBrowserbRef.removeEventListener('loaderror', iabLoadError);
        inAppBrowserbRef.removeEventListener('exit', iabClose);
    }
 
    function inAppBrowserbClose(event) {
	     //navigator.notification.activityStop();
         //alert(event.type);
         inAppBrowserbRef.removeEventListener('loadstart', iabLoadStart);
         inAppBrowserbRef.removeEventListener('loadstop', iabLoadStop);
         inAppBrowserbRef.removeEventListener('loaderror', iabLoadError);
         inAppBrowserbRef.removeEventListener('exit', iabClose);
    }
        }
        function exitFromApp()
            {
                if (navigator.app) {
                   navigator.app.exitApp();
                }
                else if (navigator.device) {
                    navigator.device.exitApp();
                }
            }