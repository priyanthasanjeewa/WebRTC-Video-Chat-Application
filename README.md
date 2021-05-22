# This is the source code of WebRTC Video Chat Application

Chat Appliaction Usage Guide
----------------------------
1.Download the Application to your Windows PC from GitHub (URL given below)
2.Open it with VS Code
3.Run 'npm start' in the terminal. 
	NOTE 1: Make sure to run the Signal Server written in C++ before this step as instructed in following Github project's README)
			GitHub : https://github.com/priyanthasanjeewa/WebRTC-Signal-Server-CPP.git
	NOTE 2: Make sure to replace the signal server IP and port number(currently 18099) in WSSignalHandler.js line 48
4.Initiate a web browser using the shown URL in the terminal. Once the web page is loaded type 'username' in the given text area 
  and press 'Log in for Chat' button.
5.Open another tab and open a web page using the same URL and follow latter part of step 4.
6.Once login is success for both users, a user list will appear in both web pages and press 'connect' button agaist 
  the username whom you want to connect to (In this case only one user will be there in the User List) in one of the web pages.
7.Once the connection success, enter a message in 'Type message' text area and press 'Send Message' button. Sent messages will 
  be shown in each web page.
  
PS : Concurrency is yet to be handled.

Video Appliaction Usage Guide
----------------------------
1.Video application is on progress in order to make it compatible with C++ signal server
