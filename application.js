/* document.querySelector('[data-form-button]').onclick = async () => {
    console.log('oi')
    const reg = await navigator.serviceWorker.getRegistration();
    Notification.requestPermission().then(permission => {
      if (permission !== 'granted') {
        alert('you need to allow push notifications');
      } else {
        const timestamp = moment().format('HH:mm') + 5 * 1000; 
        console.log(timestamp)// now plus 5000ms
        console.log(reg)
        reg.showNotification(
          'Demo Push Notification',
          {
            tag: timestamp, // a unique ID
            body: 'e ai cachorro', // content of the push notification
            showTrigger: new TimestampTrigger(timestamp), // set the time for the push notification
           
          }
        );
      }
    });
  }; */

  const timestamp = moment().format('HH:mm') 
  console.log(timestamp)

  const createScheduledNotification = async (tag, title, timestamp) => {
    const registration = await navigator.serviceWorker.getRegistration();
    registration.showNotification(title, {
      tag: tag,
      body: "This notification was scheduled 30 seconds ago",
      showTrigger: new TimestampTrigger(timestamp + 30 * 1000)
    });
  };