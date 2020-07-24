// index.js
const webex = window.Webex.init({
  credentials: {
    access_token: `ZDY4MTJjNzEtNzkxNi00ZDRhLTg1NDEtNWRhNTI2N2RmYTYyN2U3YzNmY2UtMDAw_PF84_consumer`
  }
});


//We'll need to register and connect with the Webex Teams Cloud before attempting to join a meeting
webex.meetings.register()
  .catch((err) => {
    console.error(err);
    alert(err);
    throw err;
  });


//When we make a meeting, the SDK will generate several events to keep us informed about the meeting's
// progress such as media stream changes, hangups, etc. Let's watch for these events by adding this code:

  function bindMeetingEvents(meeting) {
    meeting.on('error', (err) => {
      console.error(err);
    });
  
    // Handle media streams changes to ready state
    meeting.on('media:ready', (media) => {
      if (!media) {
        return;
      }
      if (media.type === 'local') {
        document.getElementById('self-view').srcObject = media.stream;
      }
      if (media.type === 'remoteVideo') {
        document.getElementById('remote-view-video').srcObject = media.stream;
      }
      if (media.type === 'remoteAudio') {
        document.getElementById('remote-view-audio').srcObject = media.stream;
      }
    });
  
    // Handle media streams stopping
    meeting.on('media:stopped', (media) => {
      // Remove media streams
      if (media.type === 'local') {
        document.getElementById('self-view').srcObject = null;
      }
      if (media.type === 'remoteVideo') {
        document.getElementById('remote-view-video').srcObject = null;
      }
      if (media.type === 'remoteAudio') {
        document.getElementById('remote-view-audio').srcObject = null;
      }
    });
  
    // Of course, we'd also like to be able to leave the meeting:
    document.getElementById('hangup').addEventListener('click', () => {
      meeting.leave();
    });
  }

//When our meeting is created, we are not automatically joined into it. Let's create a helper 
//function that will join the meeting for us

  // Join the meeting and add media
function joinMeeting(meeting) {

    return meeting.join().then(() => {
      const mediaSettings = {
        receiveVideo: true,
        receiveAudio: true,
        receiveShare: false,
        sendVideo: true,
        sendAudio: true,
        sendShare: false
      };
  
      // Get our local media stream and add it to the meeting
      return meeting.getMediaStreams(mediaSettings).then((mediaStreams) => {
        const [localStream, localShare] = mediaStreams;
  
        meeting.addMedia({
          localShare,
          localStream,
          mediaSettings
        });
      });
    });
  }

  //In our simple HTML page, we added a form with a few buttons to start and end the meeting. Let's add an
  // event listener to initiate the meeting when the join button is clicked:

  document.getElementById('destination').addEventListener('submit', (event) => {
    // again, we don't want to reload when we try to join
    event.preventDefault();
  
    const destination = document.getElementById('invitee').value;
  
    return webex.meetings.create(destination).then((meeting) => {
      // Call our helper function for binding events to meetings
      bindMeetingEvents(meeting);
  
      return joinMeeting(meeting);
    })
    .catch((error) => {
      // Report the error
      console.error(error);
    });
  });