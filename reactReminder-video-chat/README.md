This is the source code of WebRTC Video Chat Application. 

Attention: How to configure firebase?  

Create a firebase app and replace the authKey and other variables inside the config.js file.
1-Login into firebase console
2-Create a new app
3-Go to the new app settings section
4-From your apps section, select your app and select Config radio button and copy the firebaseConfig variable and paste it in the config.js file in the project

Chat Appliaction Usage Guide
----------------------------
1.Download the Application to your Windows PC from GitHub (URL given below)
2.Open it with VS Code
3.Run 'npm start' in the terminal. (Make sure to run the Signal Server written in JavaScript before this step
  as the C++ Signal Server is yet to configure with the application)
4.Initiate a web browser using the shown URL in the terminal. Once the web page is loaded type 'username' in the given text area 
  and press 'Log in for Chat' button.
5.Open another tab and open a web page using the same URL and follow latter part of step 4.
6.Once login is success for both users, a user list will appear in both web pages and press 'connect' button agaist 
  the username whom you want to connect to (In this case only one user will be there in the User List) in one of the web pages.
7.Once the connection success, enter a message in 'Type message' text area and press 'Send Message' button. Sent messages will 
  be shown in each web page.

Video Appliaction Usage Guide
----------------------------
1.Download the Application to your Windows PC from GitHub (URL given below)
2.Open it with VS Code
3.Run 'npm start' in the terminal.(Video application uses firebase database service for handling signaling purposes. 
  A firebase project has been already initiated and application will be automatically connected to firebase and no further action is need)
4.Initiate a web browser using the shown URL in the terminal. Once the web page is loaded type 'username' in the given text area 
  and press 'Video Call Login' button.
5.Open another tab and open a web page using the same URL and follow latter part of step 4.
6.Once login is success for both users, enter the username whom you want to connect to in the given text area and press 'call' button.
