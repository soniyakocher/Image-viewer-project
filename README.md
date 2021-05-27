# Image-viewer-project
ImageViewer is a web application, which allows a user to view his/her own profile and the images posted by the user on his/her Instagram account.Listed below are the different pages and the features inside this web application:
 

1. Login Page

A user can log in to the application using the ‘access-token’ provided by Instagram.

 2. Home Page

After logging in, the user is taken to the home page where he/she can view all the images posted by him/her on his/her own Instagram account.

Along with each image posted, the user can view the date on which the image was posted, the caption of the image, the hashtags (if any) posted with the image, and the number of likes on the image.

A user can search for an image based on its caption.

A user can like an image.

A user can comment on an image.

On the home page, a user can also choose an image file from his/her system and upload the same on the home page along with providing the caption and hashtags for the image. (Optional Feature)

On the home page, when a user clicks on his/her profile picture icon on the header, he/she is taken to the profile page.

3. Profile Page

The user can view the total number of image posts on Instagram along with the number of people he/she follows and the number of people who follow him/her.

The user can edit his/her full name.

After clicking on an image on the profile page, the user can view all the information of the picture and perform all the functionalities on it, which the user could see and perform on the home page.

 Goal
With the ImageViewer application, you can put into practice the skills and knowledge that you learned in the ReactJS module. You will be given certain guidelines that will help you create this application. These guidelines will provide the proper instructions as to how you should create the front-end of the application using ReactJS and integrate it with the back-end. This will help you practice sending an HTTP request to the server and getting the HTTP response back from it. The response data that you get from the server can, then, be manipulated as per the application requirements and be used to render vital information in your application.

 

Overall, developing this application will help you understand how real-world front-end applications are created while following the best software development practices.

 

After developing this application, you will feel confident in building the front-end user interface using React and integrating it with the back-end for any real-world application.
You need to follow certain guidelines on Instagram in order to be able to use the public APIs provided by them. Before you start, you will need:

A Facebook Developer Account. 

An Instagram Account with media.

A public website that you own. If you do not have a public website then you can use: https://www.upgrad.com/

An app like Postman that can perform cURL requests. You can download Postman from this link:  Postman
Points to Remember
You must be logged in to your Facebook account before starting the steps given in the above link.
 
In Step 1 (Create a Facebook App) & Step 2 (Configure Instagram Basic Display), the website to be used must be either your own public website or you can use: https://www.upgrad.com/
 
Also, you must add an 's' in 'http' whenever you are giving your website's URL. You can find an example of the app-id mentioned in step 4 (Authenticate the Test User) in the image below. This app-id has to be used to construct authorization window URL. 
In order to perform step 5(Exchange the Code for a Token) & Step 6 (Query the User Node), you'll have to make some cURL requests. For that, you need to import cURL in your Postman Software and then run the commands. You can refer to the link given below for importing cURL and running the commands.
https://www.shipengine.com/docs/curl/
 

The access tokens generated this way are short-lived and lasts only for an hour. So, if you wish to generate new access tokens, then you can skip the first three steps and directly start with step 4 (Authenticate the Test User).
 

‘access-token’ is highly confidential because this allows one to read your information on your Instagram account. Therefore, you should not share your personal account’s credentials and ‘access-token’ with anyone. This is why we recommend that you create a new account on Instagram before developing this application.

Following are the steps associated with creating a new account on Instagram:
 

1. Visit the official website or mobile application of Instagram.

2. Sign up and create a new account for yourself.

3. Upload your profile picture and add other information about yourself. After this, post at least 5 pictures to this newly created  Instagram account and ask your friends to like and comment on them. Alternatively, you can like and comment on each picture from your own account.

Note that you do not need to post your own pictures or upload your own profile picture or add the real information about yourself. You can add random data and upload random pictures.

 

[IMPORTANT] Notes:

1. The access-token of SD upGrad user account is:
8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784
You can either use this token or create your own.
 

2. A user will not be able to manipulate (add/update/delete) any data associated with his/her account on Instagram. Also, the user cannot view his/her friends’ profiles and the images posted by them.
 

3. You must not host this application anywhere. This application is not meant for any commercial purpose but is for educational purposes only. You can look at the Terms of Use of Instagram and must abide by their Platform Policy.
